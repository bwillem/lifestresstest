import { ComputedDomains, UserData } from "../types"
import { getAverageOfDomain, totalOfDomain, sumSeverity, sum, getTotalQuestionSumOfDomain } from "../util"

const getTotal = (data: ComputedDomains) =>
  Object.entries(data).length ? Object.entries(data)?.reduce((prev, curr) => prev + curr[1].value, 0) : 0

function useStressorDomains(userData: UserData, publicData: UserData[]) {
  console.log('H', totalOfDomain('H')(userData), userData['Hous'])
  console.log('E', totalOfDomain('E')(userData), userData['Educ'])
  console.log('M', totalOfDomain('M')(userData), userData['Mari'])
  console.log('R', totalOfDomain('R')(userData), userData['Repr'])
  console.log('O', totalOfDomain('O')(userData), userData['Rela'])
  console.log('W', totalOfDomain('W')(userData), userData['Work'])
  console.log('F', totalOfDomain('F')(userData), userData['Fina'])
  console.log('D', totalOfDomain('D')(userData), userData['Deat'])
  console.log('L', totalOfDomain('L')(userData), userData['Lega'])
  console.log('P', totalOfDomain('P')(userData), userData['Poss'])
  console.log('X', totalOfDomain('X')(userData), userData['Life'])
  console.log('T', totalOfDomain('T')(userData), userData['Trea'])

  const userSeverity = sumSeverity(userData)
  const populationAverageSeverity = Math.round(sum(publicData.map(data => sumSeverity(data))) / publicData.length)

  const stressorDomains: ComputedDomains = userData ? {
    'housing': {
      // value: parseInt(userData['Hous'] || '0'),
      value: totalOfDomain('H')(userData),
      total: getTotalQuestionSumOfDomain('H')(userData),
    },
    'education': {
      // value: parseInt(userData['Educ'] || '0'),
      value: totalOfDomain('E')(userData),
      total: getTotalQuestionSumOfDomain('E')(userData),
    },
    'marital or partner': {
      // value: parseInt(userData['Mari'] || '0'),
      value: totalOfDomain('M')(userData),
      total: getTotalQuestionSumOfDomain('M')(userData),
    },
    'reproduction': {
      // value: parseInt(userData['Repr'] || '0'),
      value: totalOfDomain('R')(userData),
      total: getTotalQuestionSumOfDomain('R')(userData),
    },
    'other relationships': {
      // value: parseInt(userData['Rela'] || '0'),
      value: totalOfDomain('O')(userData),
      total: getTotalQuestionSumOfDomain('O')(userData),
    },
    'work': {
      // value: parseInt(userData['Work'] || '0'),
      value: totalOfDomain('W')(userData),
      total: getTotalQuestionSumOfDomain('W')(userData),
    },
    'financial': {
      // value: parseInt(userData['Fina'] || '0'),
      value: totalOfDomain('F')(userData),
      total: getTotalQuestionSumOfDomain('F')(userData),
    },
    'death': {
      // value: parseInt(userData['Deat'] || '0'),
      value: totalOfDomain('D')(userData),
      total: getTotalQuestionSumOfDomain('D')(userData),
    },
    'legal or crime': {
      // value: parseInt(userData['Lega'] || '0'),
      value: totalOfDomain('L')(userData),
      total: getTotalQuestionSumOfDomain('L')(userData),
    },
    'possessions': {
      // value: parseInt(userData['Poss'] || '0'),
      value: totalOfDomain('P')(userData),
      total: getTotalQuestionSumOfDomain('P')(userData),
    },
    'life-threatening situation': {
      // value: parseInt(userData['Life'] || '0'),
      value: totalOfDomain('X')(userData),
      total: getTotalQuestionSumOfDomain('X')(userData),
    },
    'treatment or health': {
      // value: parseInt(userData['Trea'] || '0'),
      value: totalOfDomain('T')(userData),
      total: getTotalQuestionSumOfDomain('T')(userData),
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

  // console.log(userData)
  // console.log('user severity', userSeverity)
  // console.log('population sev', populationAverageSeverity)

  return {
    userTotalStressors: getTotal(stressorDomains),
    userSeverity,
    populationAverageStressors: getTotal(publicStressorDomains),
    populationAverageSeverity,
    stressorDomains,
    publicStressorDomains,
  }
}

export default useStressorDomains