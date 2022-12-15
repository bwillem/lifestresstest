import { getAverageOfDomain, maxOfCharatertistic, maxOfDomain, totalOfCharacteristic } from "../util"

function useSocialPsychoCharacteristics(userData, publicData) {
  const socialPsychoCharacteristics = userData ? {
    'interpersonal loss': {
      value: totalOfCharacteristic('L')(userData),
      total: maxOfCharatertistic('L')(userData),
    },
    'physical danger': {
      value: totalOfCharacteristic('D')(userData),
      total: maxOfCharatertistic('D')(userData),
    },
    'humiliation': {
      value: totalOfCharacteristic('H')(userData),
      total: maxOfCharatertistic('H')(userData),
    },
    'role change or disruption': {
      value: totalOfCharacteristic('R')(userData),
      total: maxOfCharatertistic('R')(userData),
    },
    'entrapment': {
      value: totalOfCharacteristic('E')(userData),
      total: maxOfCharatertistic('E')(userData),
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