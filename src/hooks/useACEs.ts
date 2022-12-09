import { UserData } from "../types"

function useACEs(userData, publicData) {
    const aceData = userData ? {
        'Emotional abuse': {
            value: userData['ACE7'],
            total: 1,
        },
        'Incarcerated relative': {
            value: userData['ACE6'],
            total: 1,
        },
        'Mental illness': {
            value: userData['ACE3'],
            total: 1,
        },
        'Mother treated violently': {
            value: userData['ACE5'],
            total: 1,
        },
        'Physical abuse': {
            value: userData['ACE8'],
            total: 1,
        },
        'Physical neglect': {
            value: userData['ACE1'],
            total: 1,
        },
        'Emotional neglect': {
            value: userData['ACE9'],
            total: 1,
        },
        'Sexual abuse': {
            value: userData['ACE10'],
            total: 1,
        },
        'Substance abuse': {
            value: userData['ACE4'],
            total: 1,
        },
        'Loss of parent (divorce/death/other)': {
            value: userData['ACE2'],
            total: 1,
        },
    } : {}

    /**
     * TODO: somehow make sure only the users WHO WERE ASKED
     * ACE QUESTIONS get included in the average.
     * 
     * This means we need to distinguish between no value (answered no)
     * and no value (never answered)!
     */
    const sumACES = (userData: UserData) => {
        const values = Object.entries(userData).reduce((prev, curr) => {
            if (curr[0]?.includes('ACE')) return [...prev, parseInt(curr[0])]
            return prev
        }, [] as number[])

        return values
    }

    return {
        aceData,
        userTotalACEs: Object.keys(aceData)?.map(x => (aceData[x]?.value || 0)) || 0,
        populationAverageACEs: publicData.map(userData => sumACES(userData)).reduce((prev, curr) => prev + curr, 0),
    }
}

export default useACEs