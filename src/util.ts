import { Characteristics, Domains, PublicStressorDomains, UserData } from "./types"

const capitalize = (x: string) => `${x[0].toUpperCase()}${x.slice(1).toLowerCase()}`
const slugify = (x: string) => x.replaceAll(' ', '-').toLowerCase()
const isTruthy = (value: string) => value && Boolean(parseInt(value) || 0)
const isEorD = p => (p[0] === 'E') || (p[0] === 'D')
const isInitialQuestion = p => p[6] === undefined
const isFrequency = p => p[6] === 'F'
const isSeverity = p => p[6] === 'S'
const isOfDomain = domain => value => value?.[5] === domain

const getAllTruthyAtVariableIndex = variableIndex => (variableElement: Domains | Characteristics) => data =>
    Object.keys(data).reduce((prev, curr) => {
        const value = parseInt(data[curr] || 0)
        if (!value) return prev
        if (isEorD(curr) && curr[variableIndex] === variableElement) {
            if (isInitialQuestion(curr)) {
                return {
                    ...prev,
                    [curr]: value,
                }
            }
            // if (isFrequency(curr)) {
            //     return {
            //         ...prev,
            //         [curr]: value > 0 ? value - 1 : value, // account for initial question adding 1 to frequency
            //     }
            // }
        }
        return prev
    }, {})

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

const getTotalQuestionSum = variableIndex => variableElement => data =>
    Object.keys(data).reduce((prev, curr) => {
        const is = isEorD(curr) && isInitialQuestion(curr)
        return (is && curr?.[variableIndex] === variableElement) ? prev + 1 : prev
    }, 0)

// const getEachDomain = getAllTruthyAtVariableIndex(4)
const getAllOfChar = getAllTruthyAtVariableIndex(5)
const getTotalQuestionSumOfDomain = getTotalQuestionSum(4)
// const getTotalQuestionSumOfChar = getTotalQuestionSum(5)

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
        ) return prev + 1
        return prev
    }, 0)
}

// sum of truthy answers and their frequency
const sumOfDomain = (domain: Domains) => (data: UserData) => {
    return Object.entries(data).reduce((prev, curr) => {
        if (isEorD(curr[0]) && isOfDomain(domain)(curr[0])) {
            if (isInitialQuestion(curr[0])) {
                return prev + 1
            }
            if (isFrequency(curr[0]) && curr[1]) {
                const frequency = parseInt(curr[1])
                return prev + ((frequency > 0) ? (frequency - 1) : frequency) - 1 // account for initial question adding 1 to frequency
            }
        }
        return prev
    }, 0)
}

// total of all stressors
// const totalStressors = (domain: Domains) => data => {
//     return Object.keys(getTotalQuestionSumOfDomain(domain)(data)).length
// }

const totalOfChar = (char: Characteristics) => data => {
    return Object.keys(getAllOfChar(char)(data)).filter(x => isTruthy(data[x])).length
}

const getAverageOfDomain = (domain: Domains) => (data: any[]) =>
    data?.length ? data.reduce((prev, curr) => prev + totalOfDomain(domain)(curr), 0) / data.length : 0

export {
    sum,
    slugify,
    capitalize,
    publicAverage,
    // getEachDomain,
    // getAllOfChar,
    // getTotalQuestionSumOfChar,
    getTotalQuestionSumOfDomain,
    totalOfDomain,
    totalOfChar,
    getAverageOfDomain,
    getAllOfType,
    sumSeverity,
}