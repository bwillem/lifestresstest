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
  if (!publicData.length) return 0
  return publicData
    .map(x => getKTotal(x))
    .reduce((prev, curr) => prev + curr, 0) / publicData.length
}

function usePositiveResilienceFactors(userData, publicData) {
  const allK = getAllOfType('K')(userData)

  const userTotal = getKTotal(userData)
  const populationAverage = Math.round(getKAverage(publicData))

  const selfPositiveResilienceFactors = userData ? {
    'positive emotions': {
      value: allK['K67'],
      total: 4,
    },
    'sense of purpose': {
      value: allK['K68'],
      total: 4,
    },
    'self-regulation': {
      value: allK['K69'],
      total: 4,
    },
    'connection to nature': {
      value: allK['K70'],
      total: 4,
    },
    'agency/control': {
      value: allK['K71'],
      total: 4,
    },
  } : {}

  const socialPositiveResilienceFactors = userData ? {
    'social connection': {
      value: allK['K72'],
      total: 4,
    },
    'collaboration': {
      value: allK['K73'],
      total: 4,
    },
    'conflict resolution': {
      value: allK['K74'],
      total: 4,
    },
    'resources to succeed': {
      value: allK['K75'],
      total: 4,
    },
    'collective support': {
      value: allK['K76'],
      total: 8,
    },
  } : {}

  return {
    userTotal,
    populationAverage,
    selfPositiveResilienceFactors,
    socialPositiveResilienceFactors,
  }
}

export default usePositiveResilienceFactors