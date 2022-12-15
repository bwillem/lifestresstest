import { ComputedDomains, UserData } from "../types"
import {
  sumOfStressors,
  populationAverageSumOfStressors,
  getAverageOfDomain,
  totalOfDomain,
  sumSeverity,
  sum,
  maxOfDomain,
  maxSumOfSeverity,
  maxSumOfStressors,
  maxSumOfChronicStressors,
  maxSumOfAcuteStressors,
  maxSumOfChronicStressorSeverity,
  maxSumOfAcuteStressorSeverity,
} from "../util"


function useStressorDomains(userData: UserData, publicData: UserData[]) {
  // console.log('H', totalOfDomain('H')(userData), userData['Hous'], sumOfDomain('H')(userData))
  // console.log('E', totalOfDomain('E')(userData), userData['Educ'], sumOfDomain('E')(userData))
  // console.log('M', totalOfDomain('M')(userData), userData['Mari'], sumOfDomain('M')(userData))
  // console.log('R', totalOfDomain('R')(userData), userData['Repr'], sumOfDomain('R')(userData))
  // console.log('O', totalOfDomain('O')(userData), userData['Rela'], sumOfDomain('O')(userData))
  // console.log('W', totalOfDomain('W')(userData), userData['Work'], sumOfDomain('W')(userData))
  // console.log('F', totalOfDomain('F')(userData), userData['Fina'], sumOfDomain('F')(userData))
  // console.log('D', totalOfDomain('D')(userData), userData['Deat'], sumOfDomain('D')(userData))
  // console.log('L', totalOfDomain('L')(userData), userData['Lega'], sumOfDomain('L')(userData))
  // console.log('P', totalOfDomain('P')(userData), userData['Poss'], sumOfDomain('P')(userData))
  // console.log('X', totalOfDomain('X')(userData), userData['Life'], sumOfDomain('X')(userData))
  // console.log('T', totalOfDomain('T')(userData), userData['Trea'], sumOfDomain('T')(userData))

  const userSeverity = sumSeverity(userData)
  const populationAverageSeverity = Math.round(sum(publicData.map(data => sumSeverity(data))) / publicData.length)

  const userTotalStressors = sumOfStressors(userData)
  const populationAverageStressors = populationAverageSumOfStressors(publicData)

  const totalMaxSumSeverity = maxSumOfSeverity(userData)
  const totalMaxSumOfStressors = maxSumOfStressors(userData)

  const totalMaxSumOfChronicStressors = maxSumOfChronicStressors(userData)
  const totalMaxSumOfAcuteStressors = maxSumOfAcuteStressors(userData)

  const totalMaxSumOfChronicStressorSeverity = maxSumOfChronicStressorSeverity(userData)
  const totalMaxSumOfAcuteStressorSeverity = maxSumOfAcuteStressorSeverity(userData)

  const stressorDomains: ComputedDomains = userData ? {
    'housing': {
      value: totalOfDomain('H')(userData),
      total: maxOfDomain('H')(userData),
    },
    'education': {
      value: totalOfDomain('E')(userData),
      total: maxOfDomain('E')(userData),
    },
    'marital or partner': {
      value: totalOfDomain('M')(userData),
      total: maxOfDomain('M')(userData),
    },
    'reproduction': {
      value: totalOfDomain('R')(userData),
      total: maxOfDomain('R')(userData),
    },
    'other relationships': {
      value: totalOfDomain('O')(userData),
      total: maxOfDomain('O')(userData),
    },
    'work': {
      value: totalOfDomain('W')(userData),
      total: maxOfDomain('W')(userData),
    },
    'financial': {
      value: totalOfDomain('F')(userData),
      total: maxOfDomain('F')(userData),
    },
    'death': {
      value: totalOfDomain('D')(userData),
      total: maxOfDomain('D')(userData),
    },
    'legal or crime': {
      value: totalOfDomain('L')(userData),
      total: maxOfDomain('L')(userData),
    },
    'possessions': {
      value: totalOfDomain('P')(userData),
      total: maxOfDomain('P')(userData),
    },
    'life-threatening situation': {
      value: totalOfDomain('X')(userData),
      total: maxOfDomain('X')(userData),
    },
    'treatment or health': {
      value: totalOfDomain('T')(userData),
      total: maxOfDomain('T')(userData),
    },
  } : {}

  const publicStressorDomains: ComputedDomains = publicData ? {
    'housing': {
      value: getAverageOfDomain('H')(publicData),
    },
    'education': {
      value: getAverageOfDomain('E')(publicData),
    },
    'marital or partner': {
      value: getAverageOfDomain('M')(publicData),
    },
    'reproduction': {
      value: getAverageOfDomain('R')(publicData),
    },
    'other relationships': {
      value: getAverageOfDomain('O')(publicData),
    },
    'work': {
      value: getAverageOfDomain('W')(publicData),
    },
    'financial': {
      value: getAverageOfDomain('F')(publicData),
    },
    'death': {
      value: getAverageOfDomain('D')(publicData),
    },
    'legal or crime': {
      value: getAverageOfDomain('L')(publicData),
    },
    'possessions': {
      value: getAverageOfDomain('P')(publicData),
    },
    'life-threatening situation': {
      value: getAverageOfDomain('L')(publicData),
    },
    'treatment or health': {
      value: getAverageOfDomain('T')(publicData),
    },
  } : {}

  return {
    userTotalStressors,
    userSeverity,
    populationAverageStressors,
    populationAverageSeverity,
    stressorDomains,
    publicStressorDomains,
    totalMaxSumSeverity,
    totalMaxSumOfStressors,
    totalMaxSumOfChronicStressors,
    totalMaxSumOfChronicStressorSeverity,
    totalMaxSumOfAcuteStressors,
    totalMaxSumOfAcuteStressorSeverity,
  }
}

export default useStressorDomains