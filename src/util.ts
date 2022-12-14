import { Characteristics, Domains, Outcomes, PublicStressorDomains, UserData } from "./types"

const capitalize = (x: string) => `${x[0].toUpperCase()}${x.slice(1).toLowerCase()}`
const slugify = (x: string) => x.replaceAll(' ', '-').toLowerCase()
const isTruthy = (value: string) => value && Boolean(parseInt(value) || 0)
const isEorD = p => (p[0] === 'E') || (p[0] === 'D')
const isInitialQuestion = p => p[6] === undefined
const isOfOutcome = (outcome: Outcomes) => (variable: string) => variable[6] === outcome
const isOfDomain = (domain: Domains) => (variable: string) => variable?.[4] === domain
const isOfCharacteristic = domain => (variable: string) => variable?.[5] === domain

const isE = p => p[0] === 'E'
const isD = p => p[0] === 'D'
const isFrequency = x => isOfOutcome('F')(x)
const isSeverity = x => isOfOutcome('S')(x)

// const getAllTruthyAtVariableIndex = variableIndex => (variableElement: Domains | Characteristics) => data =>
//     Object.keys(data).reduce((prev, curr) => {
//         const value = parseInt(data[curr] || 0)
//         if (!value) return prev
//         if (isEorD(curr) && curr[variableIndex] === variableElement) {
//             if (isInitialQuestion(curr)) {
//                 return {
//                     ...prev,
//                     [curr]: value,
//                 }
//             }
//         }
//         return prev
//     }, {})

// const getSumAtVariableIndex = variableIndex => (variableElement: Domains | Characteristics) => data =>
//     Object.keys(data).reduce((prev, curr) => {
//         const value = parseInt(data[curr] || 0)
//         if (!value) return prev
//         if (isEorD(curr) && curr[variableIndex] === variableElement) {
//             if (isInitialQuestion(curr)) {
//                 return {
//                     ...prev,
//                     [curr]: value,
//                 }
//             }
//             if (isFrequency(curr)) {
//                 return {
//                     ...prev,
//                     [curr]: value > 0 ? value - 1 : value, // account for initial question adding 1 to frequency
//                 }
//             }
//         }
//         return prev
//     }, {})

// const getTotalQuestionSum = variableIndex => variableElement => data =>
//     Object.keys(data).reduce((prev, curr) => {
//         const is = isEorD(curr) && isInitialQuestion(curr)
//         return (is && curr?.[variableIndex] === variableElement) ? prev + 1 : prev
//     }, 0)

// const getEachDomain = getAllTruthyAtVariableIndex(4)
// const getAllOfChar = getAllTruthyAtVariableIndex(5)
// const getTotalQuestionSumOfChar = getTotalQuestionSum(5)

// const maxOfDomain = getTotalQuestionSum(4)

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
        if (isE(curr[0]) && isInitialQuestion(curr[0])) {
            return prev + 1
        }
        return prev
    }, 0)
}

const totalOfChronicStressors = (data: UserData) => {
    return Object.entries(data).reduce((prev, curr) => {
        if (isD(curr[0]) && isInitialQuestion(curr[0])) {
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

const populationAverageSumOfStressors = (populationData: UserData[]) => {
    return populationData.reduce((prev, curr) => prev + sumOfStressors(curr), 0) / populationData.length
}

const maxSumOfStressors = (userData: UserData) => totalOfStressors(userData) * 5
const maxSumOfSeverity = (userData: UserData) => maxOfOutcome('S')(userData) * 5

const maxSumOfAcuteStressors = (userData: UserData) => totalOfAcuteStressors(userData) * 5
const maxSumOfChronicStressors = (userData: UserData) => totalOfChronicStressors(userData) * 5

const maxSumOfAcuteStressorSeverity = (userData: UserData) => totalOfAcuteStressors(userData) * 5
const maxSumOfChronicStressorSeverity = (userData: UserData) => totalOfChronicStressors(userData) * 5

export {
    sum,
    slugify,
    capitalize,
    publicAverage,
    totalOfDomain,
    totalOfCharacteristic,
    sumOfDomain,
    sumOfCharacteristic,
    sumOfStressors,
    populationAverageSumOfStressors,
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
}