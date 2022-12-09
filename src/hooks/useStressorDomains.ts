import { ComputedDomains, UserData } from "../types"
import { getAverageOfDomain, totalOfDomain, sumSeverity, sum } from "../util"

const getTotal = (data: ComputedDomains) =>
  Object.entries(data).length ? Object.entries(data)?.reduce((prev, curr) => prev + curr[1].value, 0) : 0

function useStressorDomains(userData: UserData, publicData: UserData[]) {
  // console.log('H', totalOfDomain('H')(userData), userData['Hous'])
  // console.log('E', totalOfDomain('E')(userData), userData['Educ'])
  // console.log('M', totalOfDomain('M')(userData), userData['Mari'])
  // console.log('R', totalOfDomain('R')(userData), userData['Repr'])
  // console.log('O', totalOfDomain('O')(userData), userData['Rela'])
  // console.log('W', totalOfDomain('W')(userData), userData['Work'])
  // console.log('F', totalOfDomain('F')(userData), userData['Fina'])
  // console.log('D', totalOfDomain('D')(userData), userData['Deat'])
  // console.log('L', totalOfDomain('L')(userData), userData['Lega'])
  // console.log('P', totalOfDomain('P')(userData), userData['Poss'])
  // console.log('X', totalOfDomain('X')(userData), userData['Life'])
  // console.log('T', totalOfDomain('T')(userData), userData['Trea'])

  const userSeverity = sumSeverity(userData)
  const populationAverageSeverity = Math.round(sum(publicData.map(data => sumSeverity(data))) / publicData.length)

  const stressorDomains: ComputedDomains = userData ? {
    'housing': {
      value: parseInt(userData['Hous'] || '0'),
      total: 5,
    },
    'education': {
      value: parseInt(userData['Educ'] || '0'),
      total: 1,
    },
    'marital or partner': {
      value: parseInt(userData['Mari'] || '0'),
      total: 5,
    },
    'reproduction': {
      value: parseInt(userData['Repr'] || '0'),
      total: 3,
    },
    'other relationships': {
      value: parseInt(userData['Rela'] || '0'),
      total: 11,
    },
    'work': {
      value: parseInt(userData['Work'] || '0'),
      total: 4,
    },
    'financial': {
      value: parseInt(userData['Fina'] || '0'),
      total: 2,
    },
    'death': {
      value: parseInt(userData['Deat'] || '0'),
      total: 4,
    },
    'legal or crime': {
      value: parseInt(userData['Lega'] || '0'),
      total: 2,
    },
    'possessions': {
      value: parseInt(userData['Poss'] || '0'),
      total: 1,
    },
    'life-threatening situation': {
      value: parseInt(userData['Life'] || '0'),
      total: 7,
    },
    'treatment or health': {
      value: parseInt(userData['Trea'] || '0'),
      total: 11,
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

  console.log('user severity', userSeverity)
  console.log('population sev', populationAverageSeverity)

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