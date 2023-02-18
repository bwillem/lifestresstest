import { ComputedDomains, UserData } from "../types"

function useACEs(userData, publicData) {
    const aceData: ComputedDomains = userData ? {
        'Emotional abuse': {
            value: parseInt(userData['ACE7']),
            total: 1,
        },
        'Incarcerated relative': {
            value: parseInt(userData['ACE6']),
            total: 1,
        },
        'Mental illness': {
            value: parseInt(userData['ACE3']),
            total: 1,
        },
        'Caregiver treated violently': {
            value: parseInt(userData['ACE5']),
            total: 1,
        },
        'Physical abuse': {
            value: parseInt(userData['ACE8']),
            total: 1,
        },
        'Physical neglect': {
            value: parseInt(userData['ACE1']),
            total: 1,
        },
        'Emotional neglect': {
            value: parseInt(userData['ACE9']),
            total: 1,
        },
        'Sexual abuse': {
            value: parseInt(userData['ACE10']),
            total: 1,
        },
        'Substance abuse': {
            value: parseInt(userData['ACE4']),
            total: 1,
        },
        'Loss of parent (divorce/death/other)': {
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
     * Anything at or newer than launch date is v2
     */
    const shouldBeIncluded = answer =>
        answer[0]?.includes('ACE') && answer !== undefined && answer !== null

    const sumACES = (userData: UserData) => {
        const values = Object.entries(userData).reduce((prev, curr) => {
            if (shouldBeIncluded(curr[0])) return [...prev, parseInt(curr[0])]
            return prev
        }, [] as number[])

        return values
    }

    const userTotalACEs = Object
        .keys(aceData)
        ?.map(x => aceData[x]?.value || 0)
        ?.reduce((prev, curr) => prev + curr, 0) || 0

    const populationAverageACEs = publicData
        .map(userData => sumACES(userData))
        .reduce((prev, curr) => prev + curr, 0) || 0

    return {
        aceData,
        userTotalACEs,
        populationAverageACEs,
    }
}

export default useACEs