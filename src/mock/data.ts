import { AcuteStressor } from "../hooks/useAcuteAndChronicStressors";

const mockAcuteStressors: { [key: string]: AcuteStressor } = {
    'lost home or evicted': {
      severity: 1,
      age: 10,
    },
    'difficult move': {
      severity: 2,
      age: 15,
    },
    'dropped or failed out of school': {
      severity: 3,
      age: 20,
    },
    'laid off or fired': {
      severity: 4,
      age: 25,
    },
    'emergency hospitalization': {
      severity: 5,
      age: 30,
    },
    'non-emergency hospitalization': {
      severity: 1,
      age: 17,
    },
    'serious break-up or divorced': {
      severity: 2,
      age: 22,
    },
    'learned of unfaithful partner': {
      severity: 3,
      age: 27,
    },
    'physical fight with partner': {
      severity: 4,
      age: 32,
    },
    'abortion': {
      severity: 5,
      age: 37,
    },
    'serious prenatal problem': {
      severity: 0,
      age: 0,
    },
    'lost primary income': {
      severity: 0,
      age: 0,
    },
    'appeared in court or arrested': {
      severity: 0,
      age: 0,
    },
    'loved one\'s suicide attempt': {
      severity: 0,
      age: 0,
    },
    'child\'s upsetting move out': {
      severity: 0,
      age: 0,
    },
    'parental divorce (under 18)': {
      severity: 0,
      age: 0,
    },
    'mother\'s death': {
      severity: 0,
      age: 0,
    },
    'father\'s death': {
      severity: 0,
      age: 0,
    },
    'child\'s death': {
      severity: 0,
      age: 0,
    },
    'other loved one\'s death': {
      severity: 0,
      age: 0,
    },
    'household break-in': {
      severity: 0,
      age: 0,
    },
    'held up or robbed': {
      severity: 0,
      age: 0,
    },
    'personally in accident': {
      severity: 0,
      age: 0,
    },
    'loved one in accident': {
      severity: 0,
      age: 0,
    },
    'physically or sexually attacked': {
      severity: 0,
      age: 0,
    },
    'life otherwise threatened': {
      severity: 0,
      age: 0,
    },
  }

  export {
    mockAcuteStressors,
  }