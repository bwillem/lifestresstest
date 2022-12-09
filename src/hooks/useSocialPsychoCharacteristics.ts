import { getAverageOfDomain, totalOfChar } from "../util"

function useSocialPsychoCharacteristics(userData, publicData) {
  const socialPsychoCharacteristics = userData ? {
    'interpersonal loss': {
      value: totalOfChar('L')(userData),
      total: 11,
    },
    'physical danger': {
      value: totalOfChar('D')(userData),
      total: 16,
    },
    'humiliation': {
      value: totalOfChar('H')(userData),
      total: 7,
    },
    'role change or disruption': {
      value: totalOfChar('R')(userData),
      total: 16,
    },
    'entrapment': {
      value: totalOfChar('E')(userData),
      total: 6,
    },
  } : {}

  const publicSocialPsychoCharacteristics = publicData ? {
    'interpersonal loss': {
      value: getAverageOfDomain('L')(publicData),
    },
    'physical danger': {
      value: getAverageOfDomain('D')(publicData),
    },
    'humiliation': {
      value: getAverageOfDomain('H')(publicData),
    },
    'role change or disruption': {
      value: getAverageOfDomain('R')(publicData),
    },
    'entrapment': {
      value: getAverageOfDomain('E')(publicData),
    },
  } : {}

  return {
    socialPsychoCharacteristics,
    publicSocialPsychoCharacteristics,
  }
}

export default useSocialPsychoCharacteristics