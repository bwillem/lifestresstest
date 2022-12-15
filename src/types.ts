export interface UserData { [key: string]: string }

export interface ComputedDomain {
    value: number
    total?: number
}
export type ComputedDomains = { [key: string]: ComputedDomain }

export type Domains =
    'H' // housing 
    | 'E' // education
    | 'W' // work
    | 'T' // treatment/health
    | 'M' // marital/partner
    | 'C' // childhood/early adversity
    | 'R' // reproduction
    | 'F' // financial
    | 'L' // legal/crime
    | 'O' // other relationships
    | 'D' // death
    | 'X' // life threatening situation
    | 'A' // accident
    | 'P' // possessions

export type VariableTypes =
    'E' // event
    | 'D' // difficulty
    | 'X' // demographic
    | 'S' // study/system

export type Characteristics = 'L' | 'D' | 'H' | 'E' | 'R'
export type Outcomes = 'D' | 'S' | 'T' | 'A' | 'F' | 'S' | 'X' | 'Y' | 'Z'

export type PublicStressorDomains = 'housi' | 'educa' | 'work' | 'treat' | 'maria' | 'child' | 'repro' | 'relat' | 'finan' | 'legal' | 'posse' | 'death'
