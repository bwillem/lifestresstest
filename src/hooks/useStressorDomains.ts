import { ComputedDomains, UserData } from "../types"
import {
  sumOfStressors,
  sumPopulationAverageStressors,
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
  isChronic,
  isAcute,
  isInitialQuestion,
  isSeverity,
} from "../util"

const filterUserData = filterBy =>
  userData =>
    Object.keys(userData)
      .filter(filterBy)
      .reduce((prev, curr) => ({
        ...prev,
        [curr]: userData[curr],
      }), {})

const userDataToNumberArray = (userData: UserData) =>
  Object.entries(userData).map(x => parseInt(x[1])).filter(x => x)

const isChronicAndInitial = variable => isChronic(variable) && isInitialQuestion(variable)
const isAcuteAndInitial = variable => isAcute(variable) && isInitialQuestion(variable)

const isChronicSeverity = variable => isChronic(variable) && isSeverity(variable)

function useStressorDomains(userData: UserData, publicData: UserData[]) {

  const userSeverity = sumSeverity(userData)

  const userChronicStressorSeverity = sumSeverity(filterUserData(isChronicSeverity)(userData))
  const userAcuteStressorSeverity = sumSeverity(filterUserData(isAcute)(userData))

  const populationAverageSeverity = Math.round(sum(publicData.map(data => sumSeverity(data))) / publicData.length)

  const populationAverageStressors = Math.round(sumPopulationAverageStressors(publicData))
  const populationAverageChronicStressors = Math.round(sum(publicData.map(data => sum(userDataToNumberArray(filterUserData(isChronicAndInitial)(data))))) / publicData.length)
  const populationAverageAcuteStressors = Math.round(sum(publicData.map(data => sum(userDataToNumberArray(filterUserData(isAcuteAndInitial)(data))))) / publicData.length)

  const populationAverageChronicStressorSeverity = Math.round(sum(publicData.map(data => sumSeverity(filterUserData(isChronicSeverity)(data)))) / publicData.length)
  const populationAverageAcuteStressorSeverity = Math.round(sum(publicData.map(data => sumSeverity(filterUserData(isChronicSeverity)(data)))) / publicData.length)

  const userTotalStressors = sumOfStressors(userData)
  const userChronicStressors = sumOfStressors(filterUserData(isChronicAndInitial)(userData))
  const userAcuteStressors = sumOfStressors(filterUserData(isAcuteAndInitial)(userData))

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
      img: 'domain-housing.png',
    },
    'education': {
      value: totalOfDomain('E')(userData),
      total: maxOfDomain('E')(userData),
      img: 'domain-education.png',
    },
    'marital or<br/>partner': {
      value: totalOfDomain('M')(userData),
      total: maxOfDomain('M')(userData),
      img: 'domain-marital-or-partner.png',
    },
    'reproduction': {
      value: totalOfDomain('R')(userData),
      total: maxOfDomain('R')(userData),
      img: 'domain-reproduction.png',
    },
    'other<br/>relationships': {
      value: totalOfDomain('O')(userData),
      total: maxOfDomain('O')(userData),
      img: 'domain-other-relationships.png',
    },
    'work': {
      value: totalOfDomain('W')(userData),
      total: maxOfDomain('W')(userData),
      img: 'domain-work.png',
    },
    'financial': {
      value: totalOfDomain('F')(userData),
      total: maxOfDomain('F')(userData),
      img: 'domain-financial.png',
    },
    'death': {
      value: totalOfDomain('D')(userData),
      total: maxOfDomain('D')(userData),
      img: 'domain-death.png',
    },
    'legal or crime': {
      value: totalOfDomain('L')(userData),
      total: maxOfDomain('L')(userData),
      img: 'domain-legal-or-crime.png',
    },
    'possessions': {
      value: totalOfDomain('P')(userData),
      total: maxOfDomain('P')(userData),
      img: 'domain-possessions.png',
    },
    'life-threatening situation': {
      value: totalOfDomain('X')(userData),
      total: maxOfDomain('X')(userData),
      img: 'domain-life-threatening-situation.png',
    },
    'treatment or<br/>health': {
      value: totalOfDomain('T')(userData),
      total: maxOfDomain('T')(userData),
      img: 'domain-treatment-or-health.png',
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
    userChronicStressors,
    userAcuteStressors,
    userChronicStressorSeverity,
    userAcuteStressorSeverity,
    userSeverity,
    populationAverageStressors,
    populationAverageSeverity,
    populationAverageChronicStressors,
    populationAverageAcuteStressors,
    populationAverageChronicStressorSeverity,
    populationAverageAcuteStressorSeverity,
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