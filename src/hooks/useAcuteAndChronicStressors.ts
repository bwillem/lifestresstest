const getDurationInYears = (years: string, months: string) => years && months &&
  ((parseInt(months) / 12) + parseInt(years)).toFixed(2)

function useAcuteAndChronicStressors(userData) {
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
    'personally in accident': userData['E338XDA'],
    'loved one in accident': userData['E354XRA'],
    'physically or sexually attacked': userData['E378XDA'],
    'life otherwise threatened': userData['E338XDA'],
  } : {}

  const chronicStressors = userData ? {
    'unsafe neighborhood': {
      // done
      duration: getDurationInYears(userData['D076HDDA'], userData['D076HDDB']),
      end_age: userData['D079HDA'],
    },
    'no privacy at home': {
      // done
      duration_start: userData['D071HEDA'],
      duration_end: userData['D071HEDB'],
      end_age: userData['D074HEA'],
    },
    'unstable housing': {
      // missing duration, age date ambiguous
      duration_start: userData['E091HRDA'],
      duration_end: userData['E091HRDB'],
      start_age: userData['E094HRA'],
    },
    'overwhelmed at work': {
      // done
      duration_start: userData['D051WEDA'],
      duration_end: userData['D051WEDB'],
      end_age: userData['D054WEA'],
    },
    'excluded at work': {
      // missing age
      duration: userData['D061WHD'],
      end_age: null,
    },
    'job search > 6 months': {
      // done
      end_age: userData['D049WRA'],
      duration: userData['D046WRD'],
    },

    'psychiatric diagnosis: self': {
      // missing both A and D
      end_age: null,
      duration: null,
    },

    'substance abuse: self': {
      // missing both A and D
      end_age: null,
      duration: null,
    },

    'loved one mentally ill': {
      // done
      end_age: userData['D438TRA'],
      duration: userData['D435TRD'],
    },

    'mother mentally ill': {
      // missing both A and D
      end_age: null,
      duration: null,
    },

    'father mentally ill': {
      // missing both A and D
      end_age: null,
      duration: null,
    },
    'life-impacting illness': {
      // done
      end_age: userData['D152TDA'],
      duration: userData['D149TDD'],
    },
    'loved one physically ill': {
      // done
      end_age: userData['D428TRA'],
      duration: userData['D425TRD'],
    },
    'received care for illness': {
      // done
      end_age: userData['D157TRA'],
      duration: userData['D154TRD'],
    },
    'infertility': {
      // done
      end_age: userData['D257RRA'],
      duration: userData['D254RRD'],
    },
    'socially isolated': {
      // done
      end_age: userData['D250MLA'],
      duration: userData['D247MLD'],
    },
    'spousal arguments': {
      // done
      end_age: userData['D207MLA'],
      duration: userData['D204MLD'],
    },
    'financial strain': {
      // done
      end_age: userData['D069FEA'],
      duration: userData['D066FED'],
    },
    'bullied': {
      // done but age question is start date
      end_age: userData['D423OHA'],
      duration: userData['D420OHD'],
    },
    'legal issues with partner': {
      // done
      end_age: userData['D514LRA'],
      duration: userData['D511LRD'],
    },
    'caregiver to loved one': {
      // done
      end_age: userData['D168OEA'],
      duration: userData['D165OED'],
    },
    'emotionally abused': {
      // done
      end_age: userData['D234OHA'],
      duration: userData['D231OHD'],
    },
    'harshly disciplined': {
      // done but age question is start date
      start_age: userData['D418OHA'],
      duration: userData['D415OHD'],
    },
    'conflict between parents': {
      // done but age question is start date
      start_age: userData['D392OEA'],
      duration: userData['D389OED'],
    },
    'difficulty caring for child(ren)': {
      // done
      end_date: userData['D553OEA'],
      duration: userData['D550OED'],
    },
    'loved one abused': {
      // done
      end_date: userData['D228ORA'],
      duration: userData['D225ORD'],
    },
    'separated from parent (<18)': {
      // done but age is start date
      start_age: userData['D398OLA'],
      duration: userData['D394OLD'],
    },
    'physically abused': {
      // done
      end_age: userData['D240XDA'],
      duration: userData['D237XDD'],
    },
    'sexually abused': {
      // done
      end_age: userData['D387XDA'],
      duration: userData['D384XDD'],
    },
  } : {}

  return {
    acuteStressors,
    chronicStressors,
  }
}

export default useAcuteAndChronicStressors
