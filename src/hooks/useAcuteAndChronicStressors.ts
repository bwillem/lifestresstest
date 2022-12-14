const getDurationInYears = (years: string, months: string) => years && months &&
  ((parseInt(months) / 12) + parseInt(years)).toFixed(2)

function useAcuteAndChronicStressors(userData) {
  const acuteStressors = userData ? {
    'lost home or evicted': {
      severity: userData['E110HRS'],
      age: userData['E112HRA'],
    },
    'difficult move': {
      severity: userData['E118HRS'],
      age: userData['E120HRA'],
    },
    'dropped or failed out of school': {
      severity: userData['E030EHS'],
      age: userData['E032EHA'],
    },
    'laid off or fired': {
      severity: userData['E039WHS'],
      age: userData['E041WHA'],
    },
    'emergency hospitalization': {
      severity: userData['E186TDS'],
      age: userData['E188TDA'],
    },
    'non-emergency hospitalization': {
      severity: userData['E142TDS'],
      age: userData['E144TDA'],
    },
    'serious break-up or divorced': {
      severity: userData['E195MLS'],
      age: userData['E197MLA'],
    },
    'learned of unfaithful partner': {
      severity: userData['E218MHS'],
      age: userData['E220MHA'],
    },
    'physical fight with partner': {
      severity: userData['E210MDS'],
      age: userData['E212MDA'],
    },
    'abortion': {
      severity: userData['E268RDS'],
      age: userData['E270RDA'],
    },
    'serious prenatal problem': {
      severity: userData['E530TDS'],
      age: userData['E532TDA'],
    },
    'lost primary income': {
      severity: userData['E344FRS'],
      age: userData['E346FRA'],
    },
    'appeared in court or arrested': {
      severity: userData['E319LRS'],
      age: userData['E321LRA'],
    },
    'loved one\'s suicide attempt': { 
      severity: userData['E368OLS'],
      age: userData['E370OLA']
    },
    'child\'s upsetting move out': { 
      severity: userData['E126OLS'],
      age: userData['E128OLA'],
    },
    'parental divorce (under 18)': { 
      severity: userData['E543OLS'],
      age: userData['E544CLA'],
    },
    'mother\'s death': { 
      severity: userData['E537DLS'],
      age: userData['E536DLA'],
    },
    'father\'s death': { 
      severity: userData['E540DLS'],
      age: userData['E539DLA'],
    },
    'child\'s death': { 
      severity: userData['E285OLS'],
      age: userData['E287OLA'],
    },
    'other loved one\'s death': { 
      severity: userData['E360DLS'],
      age: userData['E362DLA'],
    },
    'household break-in': { 
      severity: userData['E313PDA'],
      age: userData['E313PDA'],
    },
    'held up or robbed': { 
      severity: userData['E303XDS'],
      age: userData['E305XDA'],
    },
    'personally in accident': { 
      severity: userData['E336XDS'],
      age: userData['E338XDA'],
    },
    'loved one in accident': { 
      severity: userData['E352XRS'],
      age: userData['E354XRA'],
    },
    'physically or sexually attacked': { 
      severity: userData['E376XDS'],
      age: userData['E378XDA'],
    },
    'life otherwise threatened': { 
      severity: userData['E336XDS'],
      age: userData['E338XDA'],
    },
  } : {}

  const chronicStressors = userData ? {
    'unsafe neighborhood': {
      // done
      duration: getDurationInYears(userData['D076HDDA'], userData['D076HDDB']),
      end_age: userData['D079HDA'],
      severity: userData['D077HDS'],
    },
    'no privacy at home': {
      // done
      duration: getDurationInYears(userData['D071HEDA'], userData['D071HEDB']),
      end_age: userData['D074HEA'],
      severity: userData['D072HES'],
    },
    'unstable housing': {
      // missing duration, age date ambiguous
      duration: getDurationInYears(userData['E091HRDA'], userData['E091HRDB']),
      start_age: userData['E094HRA'],
      severity: userData['E092HRS'],
    },
    'overwhelmed at work': {
      // done
      duration: getDurationInYears(userData['D051WEDA'], userData['D051WEDB']),
      end_age: userData['D054WEA'],
      severity: userData['D052WES'],
    },
    'excluded at work': {
      // missing age
      duration: getDurationInYears(userData['D061WHDA'], userData['D061WHDB']),
      end_age: userData['D064WHA'],
      severity: userData['D062WHS'],
    },
    'job search > 6 months': {
      // done
      duration: getDurationInYears(userData['D046WRDA'], userData['D046WRDA']),
      end_age: userData['D049WRA'],
      severity: userData['D047WRS'],
    },

    'psychiatric diagnosis: self': {
      // missing A, D and S
      end_age: null,
      duration: null,
      severity: null,
    },

    'substance abuse: self': {
      // missing A, D and S
      end_age: null,
      duration: null,
      severity: null,
    },

    'loved one mentally ill': {
      // done
      duration: getDurationInYears(userData['D435TRDA'], userData['D435TRDB']),
      end_age: userData['D438TRA'],
      severity: userData['D436TRS'],
    },

    'mother mentally ill': {
      // missing both A and D
      end_age: null,
      duration: null,
      severity: null,
    },

    'father mentally ill': {
      // missing both A and D
      end_age: null,
      duration: null,
      severity: null,
    },
    'life-impacting illness': {
      // done
      duration: getDurationInYears(userData['D149TDDA'], userData['D149TDDB']),
      end_age: userData['D152TDA'],
      severity: userData['D149TDD'],
    },
    'loved one physically ill': {
      // done
      duration: getDurationInYears(userData['D425TRDA'], userData['D425TRDB']),
      end_age: userData['D428TRA'],
      severity: userData['D150TDS'],
    },
    'received care for illness': {
      // done
      duration: getDurationInYears(userData['D154TRDA'], userData['D154TRDB']),
      end_age: userData['D157TRA'],
      severity: userData['D155TRS'],
    },
    'infertility': {
      // done
      duration: getDurationInYears(userData['D254RRDA'], userData['D254RRDB']),
      end_age: userData['D257RRA'],
      severity: userData['D205MLS'],
    },
    'socially isolated': {
      // done
      duration: getDurationInYears(userData['D247MLDA'], userData['D247MLDB']),
      end_age: userData['D250MLA'],
      severity: userData['D248MLS'],
    },
    'spousal arguments': {
      // done
      duration: getDurationInYears(userData['D204MLDA'], userData['D204MLDB']),
      end_age: userData['D207MLA'],
      severity: userData['D205MLS'],
    },
    'financial strain': {
      // done
      duration: getDurationInYears(userData['D066FEDA'], userData['D066FEDB']),
      end_age: userData['D069FEA'],
      severity: userData['D067FES'],
    },
    'bullied': {
      // done but age question is start date
      duration: getDurationInYears(userData['D420OHDA'], userData['D420OHDB']),
      end_age: userData['D423OHA'],
      severity: userData['D421OHS'],
    },
    'legal issues with partner': {
      // done
      duration: getDurationInYears(userData['D511LRDA'], userData['D511LRDB']),
      end_age: userData['D514LRA'],
      severity: userData['D512LRS'],
    },
    'caregiver to loved one': {
      // done
      duration: getDurationInYears(userData['D165OEDA'], userData['D165OEDB']),
      end_age: userData['D168OEA'],
      severity: userData['D166OES'],
    },
    'emotionally abused': {
      // done
      duration: getDurationInYears(userData['D231OHDA'], userData['D231OHDB']),
      end_age: userData['D234OHA'],
      severity: userData['D232OHS'],
    },
    'harshly disciplined': {
      // done but age question is start date
      duration: getDurationInYears(userData['D415OHDA'], userData['D415OHDB']),
      start_age: userData['D418OHA'],
      severity: userData['D416OHS'],
    },
    'conflict between parents': {
      // done but age question is start date
      duration: getDurationInYears(userData['D389OEDA'], userData['D389OEDB']),
      start_age: userData['D392OEA'],
      severity: userData['D390OES'],
    },
    'difficulty caring for child(ren)': {
      // done
      duration: getDurationInYears(userData['D550OEDA'], userData['D550OEDB']),
      end_date: userData['D553OEA'],
      severity: userData['D551OES'],
    },
    'loved one abused': {
      // done
      duration: getDurationInYears(userData['D225ORDA'], userData['D225ORDB']),
      end_date: userData['D228ORA'],
      severity: userData['D226ORS'],
    },
    'separated from parent (<18)': {
      // done but age is start date
      duration: getDurationInYears(userData['D394OLDA'], userData['D394OLDB']),
      start_age: userData['D398OLA'],
      severity: userData['D396OLS'],
    },
    'physically abused': {
      // done
      duration: getDurationInYears(userData['D237XDDA'], userData['D237XDDB']),
      end_age: userData['D240XDA'],
      severity: userData['D238XDS'],
    },
    'sexually abused': {
      // done
      duration: getDurationInYears(userData['D384XDDA'], userData['D384XDDB']),
      end_age: userData['D387XDA'],
      severity: userData['D385XDS'],
    },
  } : {}

  return {
    acuteStressors,
    chronicStressors,
  }
}

export default useAcuteAndChronicStressors
