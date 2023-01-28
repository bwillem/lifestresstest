import { Characteristics, Domains, Outcomes, PublicStressorDomains, UserData } from "./types"

const FREQUENCY_SCALE_MAX = 4
const imgDir = process.env.NODE_ENV === 'development' ? './stress-test-report/images' : './images'

const capitalize = (x: string) => `${x[0].toUpperCase()}${x.slice(1).toLowerCase()}`
const slugify = (x: string) => x.replaceAll(' ', '-').replaceAll('/', '-').toLowerCase()
const isTruthy = (value: string) => value && Boolean(parseInt(value) || 0)
const isEorD = p => (p[0] === 'E') || (p[0] === 'D')
const isInitialQuestion = p => p[6] === undefined
const isOfOutcome = (outcome: Outcomes) => (variable: string) => variable[6] === outcome
const isOfDomain = (domain: Domains) => (variable: string) => variable?.[4] === domain
const isOfCharacteristic = domain => (variable: string) => variable?.[5] === domain
const uppercase = (x: string) => x.toUpperCase()
const capitalizeEach = (x: string) => x.split(' ').filter(Boolean).map(x => capitalize(x)).join(' ')

const isE = p => p[0] === 'E'
const isD = p => p[0] === 'D'
const isFrequency = x => isOfOutcome('F')(x)
const isSeverity = x => isOfOutcome('S')(x)

const isChronic = variable => isD(variable)
const isAcute = variable => isE(variable)

const dataLabelsFont = {
    size: 20,
}

const scaleTitleFont = {
    size: 20,
    weight: 'bold',
}

const mergeClasses = classes => defaultClasses =>
    [...defaultClasses.split(' '), ...classes.split(' ')].join(' ')

const getAllOfType = (type: string) => data =>
    Object.keys(data).reduce((prev, curr) => {
        if (curr[0] === type) {
            return {
                ...prev,
                [curr]: data[curr],
            }
        }
        return prev
    }, {})

const sum = (values: number[]) =>
    values.filter(x => x).reduce((prev, curr) => curr + prev, 0)

const sumOfAnswers = testFn => (data: UserData) => {
    return Object.entries(data).reduce((prev, curr) => {
        const variable = curr[0]
        const value = parseInt(curr[1] || '0')
        if (!testFn(variable) || !value) return prev

        return prev + value
    }, 0)
}

const sumSeverity = sumOfAnswers(isSeverity)

const publicAverage = (prop: PublicStressorDomains) => (publicData: Array<{ [key: string]: string }>) => {
    return publicData.reduce((prev, curr) => {
        return parseInt(curr[prop] || '0') + prev
    }, 0) / publicData.length
}

// total truthy answers
const totalOfDomain = (domain: Domains) => (data: UserData) => {
    return Object.entries(data).reduce((prev, curr) => {
        if (isTruthy(curr[1]) &&
            isEorD(curr[0]) &&
            isInitialQuestion(curr[0]) &&
            isOfDomain(domain)(curr[0])
        ) {
            return prev + 1
        }
        return prev
    }, 0)
}

const totalOfStressors = (data: UserData) => {
    return Object.entries(data).reduce((prev, curr) => {
        if (isEorD(curr[0]) && isInitialQuestion(curr[0])) {
            return prev + 1
        }
        return prev
    }, 0)
}

const totalOfAcuteStressors = (data: UserData) => {
    return Object.entries(data).reduce((prev, curr) => {
        if (isAcute(curr[0])) {
            return prev + 1
        }
        return prev
    }, 0)
}

const totalOfChronicStressors = (data: UserData) => {
    return Object.entries(data).reduce((prev, curr) => {
        if (isChronic(curr[0]) && isInitialQuestion(curr[0])) {
            return prev + 1
        }
        return prev
    }, 0)
}

// sum of truthy answers and their frequency
const sumOfDomain = (domain: Domains) => (data: UserData) => {
    return Object.entries(data).reduce((prev, curr) => {
        const value = parseInt(curr[1] || '')
        if (!value) return prev

        if (isEorD(curr[0]) && isOfDomain(domain)(curr[0])) {
            if (isInitialQuestion(curr[0])) {
                return prev + 1
            }
            if (isFrequency(curr[0])) {
                return prev + (value > 0 ? value - 1 : value) // account for initial question adding 1
            }
        }
        return prev
    }, 0)
}

const sumOfCharacteristic = (characteristic: Characteristics) => (data: UserData) => {
    return Object.entries(data).reduce((prev, curr) => {
        const value = parseInt(curr[1] || '')
        if (!value) return prev

        if (isEorD(curr[0]) && isOfCharacteristic(characteristic)(curr[0])) {
            if (isInitialQuestion(curr[0])) {
                return prev + 1
            }
            if (isFrequency(curr[0])) {
                return prev + (value > 0 ? value - 1 : value) // account for initial question adding 1
            }
        }
        return prev
    }, 0)
}

const maxOfDomain = (domain: Domains) => (data: UserData) => {
    return Object.entries(data).reduce((prev, curr) => {
        if (isEorD(curr[0]) &&
            isInitialQuestion(curr[0]) &&
            isOfDomain(domain)(curr[0])
        ) return prev + 1
        return prev
    }, 0)
}

const maxOfCharatertistic = (characteristic: Characteristics) => (data: UserData) => {
    return Object.entries(data).reduce((prev, curr) => {
        if (isEorD(curr[0]) &&
            isInitialQuestion(curr[0]) &&
            isOfCharacteristic(characteristic)(curr[0])
        ) return prev + 1
        return prev
    }, 0)
}

const maxOfOutcome = (outcome: Outcomes) => (data: UserData) => {
    return Object.entries(data).reduce((prev, curr) => {
        if (isEorD(curr[0]) &&
            isOfOutcome(outcome)(curr[0])
        ) return prev + 1
        return prev
    }, 0)
}

const totalOfCharacteristic = (characteristic: Characteristics) => (data: UserData) => {
    return Object.entries(data).reduce((prev, curr) => {
        if (isTruthy(curr[1]) &&
            isEorD(curr[0]) &&
            isInitialQuestion(curr[0]) &&
            isOfCharacteristic(characteristic)(curr[0])
        ) return prev + 1
        return prev
    }, 0)
}

const getAverageOfDomain = (domain: Domains) => (data: any[]) =>
    data?.length ? data.reduce((prev, curr) => prev + totalOfDomain(domain)(curr), 0) / data.length : 0

// total sum of all reported stressors
const sumOfStressors = (data: UserData) => {
    return Object.entries(data).reduce((prev, curr) => {
        const value = parseInt(curr[1] || '')
        if (!value) return prev

        if (isEorD(curr[0])) {
            if (isInitialQuestion(curr[0])) {
                return prev + 1
            }
            if (isFrequency(curr[0])) {
                return prev + (value > 0 ? value - 1 : value) // account for initial question adding 1
            }
        }
        return prev
    }, 0)
}

const sumPopulationAverageStressors = (populationData: UserData[]) => {
    return populationData.reduce((prev, curr) => prev + sumOfStressors(curr), 0) / populationData.length
}

const maxSumOfStressors = (userData: UserData) => totalOfStressors(userData) * FREQUENCY_SCALE_MAX
const maxSumOfSeverity = (userData: UserData) => maxOfOutcome('S')(userData) * FREQUENCY_SCALE_MAX

const maxSumOfAcuteStressors = (userData: UserData) => totalOfAcuteStressors(userData)
const maxSumOfChronicStressors = (userData: UserData) => totalOfChronicStressors(userData)

const maxSumOfAcuteStressorSeverity = (userData: UserData) => totalOfAcuteStressors(userData) * FREQUENCY_SCALE_MAX
const maxSumOfChronicStressorSeverity = (userData: UserData) => totalOfChronicStressors(userData) * FREQUENCY_SCALE_MAX

export {
    sum,
    slugify,
    isChronic,
    isAcute,
    isInitialQuestion,
    isSeverity,
    capitalize,
    publicAverage,
    totalOfDomain,
    totalOfCharacteristic,
    sumOfDomain,
    sumOfCharacteristic,
    sumOfStressors,
    sumPopulationAverageStressors,
    sumSeverity,
    maxOfDomain,
    maxOfCharatertistic,
    maxSumOfSeverity,
    maxSumOfStressors,
    maxSumOfAcuteStressors,
    maxSumOfChronicStressors,
    maxSumOfAcuteStressorSeverity,
    maxSumOfChronicStressorSeverity,
    getAverageOfDomain,
    getAllOfType,
    mergeClasses,
    imgDir,
    scaleTitleFont,
    dataLabelsFont,
    uppercase,
    capitalizeEach,
}