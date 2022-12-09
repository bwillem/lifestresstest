import { getAllOfType } from '../util';

const getKTotal = data => {
  const answers = [
    data['K67'],
    data['K68'],
    data['K69'],
    data['K70'],
    data['K71'],
    data['K72'],
    data['K73'],
  ]

  return answers
    .map(x => parseInt(x) || 0)
    .filter(x => x)
    .reduce((prev, curr) => prev + curr, 0)
}

const getKAverage = publicData => {
  return publicData
    .map(x => getKTotal(x))
    .reduce((prev, curr) => prev + curr, 0) / publicData.length
}

function usePositiveResilienceFactors(userData, publicData) {
  const allK = getAllOfType('K')(userData)

  const userTotal = getKTotal(userData)
  const populationAverage = Math.round(getKAverage(publicData))

  const positiveResilienceFactors = userData ? {
    'positive emotions': {
      value: allK['K67'],
      total: 4,
    },
    'connected to environment': {
      value: allK['K68'],
      total: 4,
    },
    'connected to friends & co-workers': {
      value: allK['K69'],
      total: 4,
    },
    'connected to family': {
      value: allK['K70'],
      total: 4,
    },
    'emotional self-regulation': {
      value: parseInt(allK['K72']) + parseInt(allK['K71']),
      total: 8,
    },
    'tools & resources for positive change': {
      value: allK['K73'],
      total: 4,
    },
  } : {}

  return {
    userTotal,
    populationAverage,
    positiveResilienceFactors,
  }
}

export default usePositiveResilienceFactors