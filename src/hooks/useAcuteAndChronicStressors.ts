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
      duration: getDurationInYears(userData['D071HEDA'], userData['D071HEDB']),
      end_age: userData['D074HEA'],
    },
    'unstable housing': {
      // missing duration, age date ambiguous
      duration: getDurationInYears(userData['E091HRDA'], userData['E091HRDB']),
      start_age: userData['E094HRA'],
    },
    'overwhelmed at work': {
      // done
      duration: getDurationInYears(userData['D051WEDA'], userData['D051WEDB']),
      end_age: userData['D054WEA'],
    },
    'excluded at work': {
      // missing age
      duration: getDurationInYears(userData['D061WHDA'], userData['D061WHDB']),
      end_age: null,
    },
    'job search > 6 months': {
      // done
      duration: getDurationInYears(userData['D046WRDA'], userData['D046WRDA']),
      end_age: userData['D049WRA'],
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
      duration: getDurationInYears(userData['D435TRDA'], userData['D435TRDB']),
      end_age: userData['D438TRA'],
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
      duration: getDurationInYears(userData['D149TDDA'], userData['D149TDDB']),
      end_age: userData['D152TDA'],
      // duration: userData['D149TDD'],
    },
    'loved one physically ill': {
      // done
      duration: getDurationInYears(userData['D425TRDA'], userData['D425TRDB']),
      end_age: userData['D428TRA'],
    },
    'received care for illness': {
      // done
      duration: getDurationInYears(userData['D154TRDA'], userData['D154TRDB']),
      end_age: userData['D157TRA'],
    },
    'infertility': {
      // done
      duration: getDurationInYears(userData['D254RRDA'], userData['D254RRDB']),
      end_age: userData['D257RRA'],
    },
    'socially isolated': {
      // done
      duration: getDurationInYears(userData['D247MLDA'], userData['D247MLDB']),
      end_age: userData['D250MLA'],
    },
    'spousal arguments': {
      // done
      duration: getDurationInYears(userData['D204MLDA'], userData['D204MLDB']),
      end_age: userData['D207MLA'],
    },
    'financial strain': {
      // done
      duration: getDurationInYears(userData['D066FEDA'], userData['D066FEDB']),
      end_age: userData['D069FEA'],
    },
    'bullied': {
      // done but age question is start date
      duration: getDurationInYears(userData['D420OHDA'], userData['D420OHDB']),
      end_age: userData['D423OHA'],
    },
    'legal issues with partner': {
      // done
      duration: getDurationInYears(userData['D511LRDA'], userData['D511LRDB']),
      end_age: userData['D514LRA'],
    },
    'caregiver to loved one': {
      // done
      duration: getDurationInYears(userData['D165OEDA'], userData['D165OEDB']),
      end_age: userData['D168OEA'],
    },
    'emotionally abused': {
      // done
      duration: getDurationInYears(userData['D231OHDA'], userData['D231OHDB']),
      end_age: userData['D234OHA'],
      // duration: userData['D231OHD'],
    },
    'harshly disciplined': {
      // done but age question is start date
      duration: getDurationInYears(userData['D415OHDA'], userData['D415OHDB']),
      start_age: userData['D418OHA'],
    },
    'conflict between parents': {
      // done but age question is start date
      duration: getDurationInYears(userData['D389OEDA'], userData['D389OEDB']),
      start_age: userData['D392OEA'],
      // duration: userData['D389OED'],
    },
    'difficulty caring for child(ren)': {
      // done
      duration: getDurationInYears(userData['D550OEDA'], userData['D550OEDB']),
      end_date: userData['D553OEA'],
      // duration: userData['D550OED'],
    },
    'loved one abused': {
      // done
      duration: getDurationInYears(userData['D225ORDA'], userData['D225ORDB']),
      end_date: userData['D228ORA'],
      // duration: userData['D225ORD'],
    },
    'separated from parent (<18)': {
      // done but age is start date
      duration: getDurationInYears(userData['D394OLDA'], userData['D394OLDB']),
      start_age: userData['D398OLA'],
      // duration: userData['D394OLD'],
    },
    'physically abused': {
      // done
      duration: getDurationInYears(userData['D237XDDA'], userData['D237XDDB']),
      end_age: userData['D240XDA'],
      // duration: userData['D237XDD'],
    },
    'sexually abused': {
      // done
      duration: getDurationInYears(userData['D384XDDA'], userData['D384XDDB']),
      end_age: userData['D387XDA'],
    },
  } : {}

  return {
    acuteStressors,
    chronicStressors,
  }
}

export default useAcuteAndChronicStressors
