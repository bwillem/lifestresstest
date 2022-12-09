function useAccuteAndChronicStressors(userData) {
  const acuteStressors = userData ? {
    'lost home or evicted': userData['E112HRA'],
    'difficult move': userData['E120HRA'],
    'dropped or failed out of school': userData['E028EHA'],
    'laid off or fired': userData['E041WHA'],
    'emergency hospitalization': userData['E188TDA'],
    'non-emergency hospitalization': userData['E140TDA'],
    'serious break-up or divorced': userData['E197MLA'],
    'learned of unfaithful partner': userData['E220MHA'],
    'physical fight with partner': userData['E212MDA'],
    'abortion': userData['E270RDA'],
    'serious prenatal problem': userData['E532TDA'],
    'lost primary income': userData['E346FRA'],
    'appeared in court or arrested': userData['E321LRA'],
    'loved one\'s suicide attempt': userData['E370OLA'],
    'child\'s upsetting move out': userData['E128OLA'],
    'parental divorce (under 18)': userData['E544CLA'],
    'mother\'s death': userData['E536DLA'],
    'father\'s death': userData['E539DLA'],
    'child\'s death': userData['E287OLA'],
    'other loved one\'s death': userData['E362DLA'],
    'household break-in': userData['E313PDA'],
    'held up or robbed': userData['E305XDA'],
    'personally in accident': 'unknown',
    'loved one in accident': userData['E354XRA'],
    'physically or sexually attacked': userData['E378XDA'],
    'life otherwise threatened': userData['E338XDA'],
  } : {}

  const chronicStressors = userData ? {
    'unsafe neighborhood': {
      duration: userData['D076HDD'],
      ended: userData['D079HDA'],
    },
    'no privacy at home': {
      duration: userData['D071HED'],
      ended: userData['D074HEA'],
    },
    'unstable housing': {
      // duration: '',
      // missing duration
      ended: userData['E094HRA'],
    },
    'overwhelmed at work': {
      age: userData['D050WE'],
      duration: userData['D050WED'],
    },
    'excluded at work': { 
      age: userData['D060WH'],
      duration: userData['D060WHD'],
    },
    'job search > 6 months': { 
      age: userData['D045WR'],
      duration: userData['D045WRD'],
    },
    'psychiatric diagnosis: self': 'unknown',
    'substance abuse: self': 'unknown',
    'loved one mentally ill': { 
      age: userData['D434TR'],
      duration: userData['D424TRD'],
    },
    'mother mentally ill': { 
      age: userData['D547TR'],
      duration: userData['D547TRD'],
    },
    'father mentally ill': { 
      age: userData['D548TR'],
      duration: userData['D548TRD'],
    },
    'life-impacting illness': 'unknown',
    'loved one physically ill': { 
      age: userData['D424TR'],
      duration: userData['D424TRD'],
    },
    'received care for illness': 'unknown',
    'infertility': { 
      age: userData['D253RR'],
      duration: userData['D253RRD'],
    },
    'socially isolated': { 
      age: userData['D246ML'],
      duration: userData['D246MLD'],
    },
    'spousal arguments': { 
      age: userData['D203ML'],
      duration: userData['D203MLD'],
    },
    'financial strain': { 
      age: userData['D065FE'],
      duration: userData['E538DL'],
    },
    'bullied': userData['E283OL'],
    'legal issues with partner': userData['E358DL'],
    'caregiver to loved one': userData['E309PD'],
    'emotionally abused': userData['E301XD'],
    'harshly disciplined': 'unknown',
    'conflict between parents': userData['E350XR'],
    'difficulty caring for child(ren)': userData['D549OE'],
    'loved one abused': userData['E116HR'],
    'separated from parent (<18)': userData['E116HR'],
    'physically abused': userData['E116HR'],
    'sexually abused': userData['E116HR'],
  } : {}

  return {
    acuteStressors,
    chronicStressors,
  }
}

export default useAccuteAndChronicStressors
