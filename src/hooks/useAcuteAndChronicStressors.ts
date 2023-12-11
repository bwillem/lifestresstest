import { UserData } from "../types"

const getDurationInYears = (years: number, months: number) =>
  Number(((months / 12) + years).toFixed(2)) || 0

export interface AcuteStressor {
  severity: number
  age: number
}

export interface ChronicStressor {
  // duration in years
  end_age?: number,
  start_age?: number,
  duration: number,
  severity: number,
}

function useAcuteAndChronicStressors(userData: UserData) {
  const _userData = Object.fromEntries(Object.entries(userData).map(entry => [entry[0], entry[1] ? parseInt(entry[1]) : 0]))

  const acuteStressors: { [key: string]: AcuteStressor } = userData ? {
    'lost home or evicted': {
      severity: _userData['E110HRS'],
      age: _userData['E112HRA'],
    },
    'difficult move': {
      severity: _userData['E118HRS'],
      age: _userData['E120HRA'],
    },
    'dropped or failed out of school': {
      severity: _userData['E030EHS'],
      age: _userData['E032EHA'],
    },
    'laid off or fired': {
      severity: _userData['E039WHS'],
      age: _userData['E041WHA'],
    },
    'emergency hospitalization': {
      severity: _userData['E186TDS'],
      age: _userData['E188TDA'],
    },
    'non-emergency hospitalization': {
      severity: _userData['E142TDS'],
      age: _userData['E144TDA'],
    },
    'serious break-up or divorced': {
      severity: _userData['E195MLS'],
      age: _userData['E197MLA'],
    },
    'learned of unfaithful partner': {
      severity: _userData['E218MHS'],
      age: _userData['E220MHA'],
    },
    'physical fight with partner': {
      severity: _userData['E210MDS'],
      age: _userData['E212MDA'],
    },
    'abortion': {
      severity: _userData['E268RDS'],
      age: _userData['E270RDA'],
    },
    'serious prenatal problem': {
      severity: _userData['E530TDS'],
      age: _userData['E532TDA'],
    },
    'lost primary income': {
      severity: _userData['E344FRS'],
      age: _userData['E346FRA'],
    },
    'appeared in court or arrested': {
      severity: _userData['E319LRS'],
      age: _userData['E321LRA'],
    },
    'loved one\'s suicide attempt': {
      severity: _userData['E368OLS'],
      age: _userData['E370OLA']
    },
    'child\'s upsetting move out': {
      severity: _userData['E126OLS'],
      age: _userData['E128OLA'],
    },
    'parental divorce (under 18)': {
      severity: _userData['E543OLS'],
      age: _userData['E544CLA'],
    },
    'mother\'s death': {
      severity: _userData['E537DLS'],
      age: _userData['E536DLA'],
    },
    'father\'s death': {
      severity: _userData['E540DLS'],
      age: _userData['E539DLA'],
    },
    "child's death": {
      severity: _userData['E285OLS'],
      age: _userData['E287OLA'],
    },
    "other loved one's death": {
      severity: _userData['E360DLS'],
      age: _userData['E362DLA'],
    },
    'household bre\ak-in': {
      severity: _userData['E313PDA'],
      age: _userData['E313PDA'],
    },
    'held up or robbed': {
      severity: _userData['E303XDS'],
      age: _userData['E305XDA'],
    },
    'personally in accident': {
      severity: _userData['E336XDS'],
      age: _userData['E338XDA'],
    },
    'loved one in accident': {
      severity: _userData['E352XRS'],
      age: _userData['E354XRA'],
    },
    'physically or sexually attacked': {
      severity: _userData['E376XDS'],
      age: _userData['E378XDA'],
    },
    'life otherwise threatened': {
      severity: _userData['E336XDS'],
      age: _userData['E338XDA'],
    },
  } : {}

  const chronicStressors: { [key: string]: ChronicStressor } = _userData ? {
    'unsafe neighborhood': {
      // done
      duration: getDurationInYears(_userData['D076HDDA'], _userData['D076HDDB']),
      end_age: _userData['D079HDA'],
      severity: _userData['D077HDS'],
    },
    'no privacy at home': {
      // done
      duration: getDurationInYears(_userData['D071HEDA'], _userData['D071HEDB']),
      end_age: _userData['D074HEA'],
      severity: _userData['D072HES'],
    },
    'unstable housing': {
      // missing duration, age date ambiguous
      duration: getDurationInYears(_userData['E091HRDA'], _userData['E091HRDB']),
      start_age: _userData['E094HRA'],
      severity: _userData['E092HRS'],
    },
    'overwhelmed at work': {
      // done
      duration: getDurationInYears(_userData['D051WEDA'], _userData['D051WEDB']),
      end_age: _userData['D054WEA'],
      severity: _userData['D052WES'],
    },
    'excluded at work': {
      // missing age
      duration: getDurationInYears(_userData['D061WHDA'], _userData['D061WHDB']),
      end_age: _userData['D064WHA'],
      severity: _userData['D062WHS'],
    },
    'job search > 6 months': {
      // done
      duration: getDurationInYears(_userData['D046WRDA'], _userData['D046WRDA']),
      end_age: _userData['D049WRA'],
      severity: _userData['D047WRS'],
    },
    'psychiatric diagnosis: self': {
      // missing A, D and S
      end_age: _userData['D183TRA'],
      duration: 0,
      severity: 0,
    },
    'substance abuse: self': {
      // missing A, D and S
      end_age: 0,
      duration: 0,
      severity: 0,
    },
    'loved one mentally ill': {
      // done
      duration: getDurationInYears(_userData['D435TRDA'], _userData['D435TRDB']),
      end_age: _userData['D438TRA'],
      severity: _userData['D436TRS'],
    },
    'mother mentally ill': {
      // missing both A and D
      end_age: 0,
      duration: 0,
      severity: 0,
    },
    'father mentally ill': {
      // missing both A and D
      end_age: 0,
      duration: 0,
      severity: 0,
    },
    'life-impacting illness': {
      // done
      duration: getDurationInYears(_userData['D149TDDA'], _userData['D149TDDB']),
      end_age: _userData['D152TDA'],
      severity: _userData['D149TDD'],
    },
    'loved one physically ill': {
      // done
      duration: getDurationInYears(_userData['D425TRDA'], _userData['D425TRDB']),
      end_age: _userData['D428TRA'],
      severity: _userData['D150TDS'],
    },
    'received care for illness': {
      // done
      duration: getDurationInYears(_userData['D154TRDA'], _userData['D154TRDB']),
      end_age: _userData['D157TRA'],
      severity: _userData['D155TRS'],
    },
    'infertility': {
      // done
      duration: getDurationInYears(_userData['D254RRDA'], _userData['D254RRDB']),
      end_age: _userData['D257RRA'],
      severity: _userData['D205MLS'],
    },
    'socially isolated': {
      // done
      duration: getDurationInYears(_userData['D247MLDA'], _userData['D247MLDB']),
      end_age: _userData['D250MLA'],
      severity: _userData['D248MLS'],
    },
    'spousal arguments': {
      // done
      duration: getDurationInYears(_userData['D204MLDA'], _userData['D204MLDB']),
      end_age: _userData['D207MLA'],
      severity: _userData['D205MLS'],
    },
    'financial strain': {
      // done
      duration: getDurationInYears(_userData['D066FEDA'], _userData['D066FEDB']),
      end_age: _userData['D069FEA'],
      severity: _userData['D067FES'],
    },
    'bullied': {
      // done but age question is start date
      duration: getDurationInYears(_userData['D420OHDA'], _userData['D420OHDB']),
      start_age: _userData['D423OHA'],
      severity: _userData['D421OHS'],
    },
    'legal issues with partner': {
      // done
      duration: getDurationInYears(_userData['D511LRDA'], _userData['D511LRDB']),
      end_age: _userData['D514LRA'],
      severity: _userData['D512LRS'],
    },
    'caregiver to loved one': {
      // done
      duration: getDurationInYears(_userData['D165OEDA'], _userData['D165OEDB']),
      end_age: _userData['D168OEA'],
      severity: _userData['D166OES'],
    },
    'emotionally abused': {
      // done
      duration: getDurationInYears(_userData['D231OHDA'], _userData['D231OHDB']),
      end_age: _userData['D234OHA'],
      severity: _userData['D232OHS'],
    },
    'harshly disciplined': {
      // done
      duration: getDurationInYears(_userData['D415OHDA'], _userData['D415OHDB']),
      start_age: _userData['D418OHA'],
      severity: _userData['D416OHS'],
    },
    'conflict between parents': {
      // done
      duration: getDurationInYears(_userData['D389OEDA'], _userData['D389OEDB']),
      start_age: _userData['D392OEA'],
      severity: _userData['D390OES'],
    },
    'difficulty caring for child(ren)': {
      // done
      duration: getDurationInYears(_userData['D550OEDA'], _userData['D550OEDB']),
      end_age: _userData['D553OEA'],
      severity: _userData['D551OES'],
    },
    'loved one abused': {
      // done
      duration: getDurationInYears(_userData['D225ORDA'], _userData['D225ORDB']),
      end_age: _userData['D228ORA'],
      severity: _userData['D226ORS'],
    },
    'separated from parent (under 18)': {
      // done
      duration: getDurationInYears(_userData['D394OLDA'], _userData['D394OLDB']),
      start_age: _userData['D398OLA'],
      severity: _userData['D396OLS'],
    },
    'physically abused': {
      // done
      duration: getDurationInYears(_userData['D237XDDA'], _userData['D237XDDB']),
      end_age: _userData['D240XDA'],
      severity: _userData['D238XDS'],
    },
    'sexually abused': {
      // done
      duration: getDurationInYears(_userData['D384XDDA'], _userData['D384XDDB']),
      end_age: _userData['D387XDA'],
      severity: _userData['D385XDS'],
    },
  } : {}

  return {
    acuteStressors,
    chronicStressors,
  }
}

export default useAcuteAndChronicStressors
