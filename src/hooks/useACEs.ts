import { ComputedDomains, UserData } from "../types"

function useACEs(userData: UserData, publicData: UserData[]) {
    const aceData: ComputedDomains = userData ? {
        'physical abuse': {
            value: parseInt(userData['ACE8']),
            total: 1,
        },
        'emotional abuse': {
            value: parseInt(userData['ACE7']),
            total: 1,
        },
        'sexual abuse': {
            value: parseInt(userData['ACE10']),
            total: 1,
        },
        'substance abuse': {
            value: parseInt(userData['ACE4']),
            total: 1,
        },
        'emotional neglect': {
            value: parseInt(userData['ACE9']),
            total: 1,
        },
        'physical neglect': {
            value: parseInt(userData['ACE1']),
            total: 1,
        },
        'parent/caregiver violence': {
            value: parseInt(userData['ACE5']),
            total: 1,
        },
        'mental illness': {
            value: parseInt(userData['ACE3']),
            total: 1,
        },
        'incarcerated relative': {
            value: parseInt(userData['ACE6']),
            total: 1,
        },
        'loss of parent (divorce/death/other)': {
            value: parseInt(userData['ACE2']),
            total: 1,
        },
    } : {}

    /**
     * We make sure only the users WHO WERE ASKED
     * ACE QUESTIONS get included in the average.
     * 
     * This means we need to distinguish between
     * no value (answered no) and no value
     * (never answered)
     * 
     * TODO: CHECK THIS WORKS! unanswered questions
     * should be nullish, no answered questions should
     * be 0 or falsy or something?????
     * 
     * We might want to just do this by submit date.
     * Anything at or newer than launch date
     */
    const shouldBeIncluded = (value: string) =>
        (value !== undefined) &&
        (value !== null)

    const sumACES = (data: UserData) => {

        const sum = Object.keys(data)
            .filter(x => x[0] === 'A' && x[1] === 'C' && x[2] === 'E')
            .reduce((prev, curr) => {
                if (shouldBeIncluded(data[curr])) return prev + parseInt(data[curr])
                return prev
            }, 0)

        return sum
    }

    const userTotalACEs = Object
        .keys(aceData)
        ?.map(x => aceData[x]?.value || 0)
        ?.reduce((prev, curr) => prev + curr, 0) || 0

    const populationAverageACEs = Math.round(
        (publicData.reduce((prev, curr) => {
            return prev + sumACES(curr)
        }, 0) / publicData.length) * 10) / 10

    return {
        aceData,
        userTotalACEs,
        populationAverageACEs,
    }
}

export default useACEs