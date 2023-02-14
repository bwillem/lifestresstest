const API_VERSION: Number = 1

const SURVEYID = function () {
    switch (API_VERSION) {
        case 1: { return '691287' };
        case 2: { return '686833' };
        default: { return '691287' };
    }
}()

const PHQGID = function () {
    switch (API_VERSION) {
        case 1: { return '147' };
        case 2: { return '6980' };
        default: { return '147' };
    }
}()

const STRAINBODY1GID = function () {
    switch (API_VERSION) {
        case 1: { return '146' };
        case 2: { return '6979' };
        default: { return '146' };
    }
}()

const STRAINBODY2GID = function () {
    switch (API_VERSION) {
        case 1: { return '145' };
        case 2: { return '6978' };
        default: { return '145' };
    }
}()

const STRAINBODY3GID = function () {
    switch (API_VERSION) {
        case 1: { return '144' };
        case 2: { return '6977' };
        default: { return '144' };
    }
}()

const STRAINBODY4GID = function () {
    switch (API_VERSION) {
        case 1: { return '143' };
        case 2: { return '6976' };
        default: { return '143' };
    }
}()

const STRAINBODY5GID = function () {
    switch (API_VERSION) {
        case 1: { return '142' };
        case 2: { return '6975' };
        default: { return '142' };
    }
}()

const STRAINBODY6GID = function () {
    switch (API_VERSION) {
        case 1: { return '139' };
        case 2: { return '6972' };
        default: { return '139' };
    }
}()

const STRAINBODY7GID = function () {
    switch (API_VERSION) {
        case 1: { return '140' };
        case 2: { return '6973' };
        default: { return '140' };
    }
}()

const STRAINBODY8GID = function () {
    switch (API_VERSION) {
        case 1: { return '141' };
        case 2: { return '6974' };
        default: { return '141' };
    }
}()

const STRAINDEMOGRAPHICSGID = function () {
    switch (API_VERSION) {
        case 1: { return '138' };
        case 2: { return '6971' };
        default: { return '138' };
    }
}()

const STRAINGID = function () {
    switch (API_VERSION) {
        case 1: { return '137' };
        case 2: { return '6970' };
        default: { return '137' };
    }
}()

const K6GID = function () {
    switch (API_VERSION) {
        case 1: { return '148' };
        case 2: { return '6981' };
        default: { return '148' };
    }
}()

const SUMMARYGID = function () {
    switch (API_VERSION) {
        case 1: { return '149' };
        case 2: { return '6982' };
        default: { return '149' };
    }
}()

// const ACEGID = function () {
//     switch (API_VERSION) {
//         case 1: { return '' };
//         case 2: { return '6972' };
//         default: { return '6972' };
//     }
// }()

const PHQ = {
    [`${SURVEYID}X${PHQGID}X248354`]: 'PHQInfo',
    [`${SURVEYID}X${PHQGID}X248355`]: 'PHQ1',
    [`${SURVEYID}X${PHQGID}X248356`]: 'PHQ2',
    [`${SURVEYID}X${PHQGID}X248357`]: 'PHQ3',
    [`${SURVEYID}X${PHQGID}X248358`]: 'PHQ4',
    [`${SURVEYID}X${PHQGID}X248359`]: 'PHQ5',
    [`${SURVEYID}X${PHQGID}X248360`]: 'PHQ6',
    [`${SURVEYID}X${PHQGID}X248361`]: 'PHQ7',
    [`${SURVEYID}X${PHQGID}X248362`]: 'PHQ8',
    [`${SURVEYID}X${PHQGID}X248363`]: 'PHQ9',
    [`${SURVEYID}X${PHQGID}X248364`]: 'PHQ10',
    [`${SURVEYID}X${PHQGID}X248365`]: 'PHQ11',
    [`${SURVEYID}X${PHQGID}X248366`]: 'PHQ12',
    [`${SURVEYID}X${PHQGID}X248367`]: 'PHQ13',
    [`${SURVEYID}X${PHQGID}X248368`]: 'PHQ14',
}

const strainBody1 = {
    [`${SURVEYID}X${STRAINBODY1GID}X248352`]: 'S439StYN',
    [`${SURVEYID}X${STRAINBODY1GID}X248353`]: 'S440StWT',
}

const strainBody2 = {
    [`${SURVEYID}X${STRAINBODY2GID}X248293`]: 'E374XD',
    [`${SURVEYID}X${STRAINBODY2GID}X248294`]: 'E375XDF',
    [`${SURVEYID}X${STRAINBODY2GID}X248295`]: 'E376XDS',
    [`${SURVEYID}X${STRAINBODY2GID}X248296`]: 'E377XDT',
    [`${SURVEYID}X${STRAINBODY2GID}X248297`]: 'E378XDA',
    [`${SURVEYID}X${STRAINBODY2GID}X248298`]: 'E379XDX',
    [`${SURVEYID}X${STRAINBODY2GID}X248299`]: 'E380XDY',
    [`${SURVEYID}X${STRAINBODY2GID}X248300`]: 'E381XDZ',
    [`${SURVEYID}X${STRAINBODY2GID}X248301`]: 'D382XD',
    [`${SURVEYID}X${STRAINBODY2GID}X248302`]: 'D383CDC',
    [`${SURVEYID}X${STRAINBODY2GID}X248303A`]: 'D382XDDA',
    [`${SURVEYID}X${STRAINBODY2GID}X248303B`]: 'D382XDDB',
    [`${SURVEYID}X${STRAINBODY2GID}X248304`]: 'D385XDS',
    [`${SURVEYID}X${STRAINBODY2GID}X248306`]: 'D387XDA',
    [`${SURVEYID}X${STRAINBODY2GID}X248268`]: 'INFO1',
    [`${SURVEYID}X${STRAINBODY2GID}X248168`]: 'D224OR',
    [`${SURVEYID}X${STRAINBODY2GID}X248169A`]: 'D225ORDA',
    [`${SURVEYID}X${STRAINBODY2GID}X248169B`]: 'D225ORDB',
    [`${SURVEYID}X${STRAINBODY2GID}X248170`]: 'D226ORS',
    [`${SURVEYID}X${STRAINBODY2GID}X248172`]: 'D228ORA',
    [`${SURVEYID}X${STRAINBODY2GID}X248269`]: 'E350XR',
    [`${SURVEYID}X${STRAINBODY2GID}X248270`]: 'E351XRF',
    [`${SURVEYID}X${STRAINBODY2GID}X248271`]: 'E352XRS',
    [`${SURVEYID}X${STRAINBODY2GID}X248272`]: 'E353XRT',
    [`${SURVEYID}X${STRAINBODY2GID}X248273`]: 'E354XRA',
    [`${SURVEYID}X${STRAINBODY2GID}X248274`]: 'E355XRX',
    [`${SURVEYID}X${STRAINBODY2GID}X248275`]: 'E356XRY',
    [`${SURVEYID}X${STRAINBODY2GID}X248276`]: 'E357XRZ',
    [`${SURVEYID}X${STRAINBODY2GID}X248277`]: 'E358DL',
    [`${SURVEYID}X${STRAINBODY2GID}X248278`]: 'E359DLF',
    [`${SURVEYID}X${STRAINBODY2GID}X248279`]: 'E360DLS',
    [`${SURVEYID}X${STRAINBODY2GID}X248280`]: 'E361DLT',
    [`${SURVEYID}X${STRAINBODY2GID}X248281`]: 'E362DLA',
    [`${SURVEYID}X${STRAINBODY2GID}X248282`]: 'E363DLX',
    [`${SURVEYID}X${STRAINBODY2GID}X248283`]: 'E364DLY',
    [`${SURVEYID}X${STRAINBODY2GID}X248284`]: 'E365DLZ',
    [`${SURVEYID}X${STRAINBODY2GID}X248285`]: 'E366OL',
    [`${SURVEYID}X${STRAINBODY2GID}X248286`]: 'E367OLF',
    [`${SURVEYID}X${STRAINBODY2GID}X248287`]: 'E368OLS',
    [`${SURVEYID}X${STRAINBODY2GID}X248288`]: 'E369OLT',
    [`${SURVEYID}X${STRAINBODY2GID}X248289`]: 'E370OLA',
    [`${SURVEYID}X${STRAINBODY2GID}X248290`]: 'E371OLX',
    [`${SURVEYID}X${STRAINBODY2GID}X248291`]: 'E372OLY',
    [`${SURVEYID}X${STRAINBODY2GID}X248292`]: 'E373OLZ',
}

const strainBody3 = {
    [`${SURVEYID}X${STRAINBODY3GID}X248243`]: 'E317LR',
    [`${SURVEYID}X${STRAINBODY3GID}X248244`]: 'E318LRF',
    [`${SURVEYID}X${STRAINBODY3GID}X248245`]: 'E319LRS',
    [`${SURVEYID}X${STRAINBODY3GID}X248246`]: 'E320LRT',
    [`${SURVEYID}X${STRAINBODY3GID}X248247`]: 'E321LRA',
    [`${SURVEYID}X${STRAINBODY3GID}X248248`]: 'E322LRX',
    [`${SURVEYID}X${STRAINBODY3GID}X248249`]: 'E323LRY',
    [`${SURVEYID}X${STRAINBODY3GID}X248250`]: 'E324LRZ',
    [`${SURVEYID}X${STRAINBODY3GID}X248227`]: 'E301XD',
    [`${SURVEYID}X${STRAINBODY3GID}X248228`]: 'E302XDF',
    [`${SURVEYID}X${STRAINBODY3GID}X248229`]: 'E303XDS',
    [`${SURVEYID}X${STRAINBODY3GID}X248230`]: 'E304XDT',
    [`${SURVEYID}X${STRAINBODY3GID}X248231`]: 'E305XDA',
    [`${SURVEYID}X${STRAINBODY3GID}X248232`]: 'E306XDX',
    [`${SURVEYID}X${STRAINBODY3GID}X248233`]: 'E307XDY',
    [`${SURVEYID}X${STRAINBODY3GID}X248234`]: 'E308XDZ',
    [`${SURVEYID}X${STRAINBODY3GID}X248251`]: 'E333XD',
    [`${SURVEYID}X${STRAINBODY3GID}X248252`]: 'E334XDQ',
    [`${SURVEYID}X${STRAINBODY3GID}X248253`]: 'E335XDF',
    [`${SURVEYID}X${STRAINBODY3GID}X248254`]: 'E336XDS',
    [`${SURVEYID}X${STRAINBODY3GID}X248255`]: 'E337XDT',
    [`${SURVEYID}X${STRAINBODY3GID}X248256`]: 'E338XDA',
    [`${SURVEYID}X${STRAINBODY3GID}X248257`]: 'E339XDX',
    [`${SURVEYID}X${STRAINBODY3GID}X248258`]: 'E340XDY',
    [`${SURVEYID}X${STRAINBODY3GID}X248259`]: 'E341XDZ',
}

const strainBody4 = {
    [`${SURVEYID}X${STRAINBODY4GID}X248185`]: 'D246ML',
    [`${SURVEYID}X${STRAINBODY4GID}X248186A`]: 'D247MLDA',
    [`${SURVEYID}X${STRAINBODY4GID}X248186B`]: 'D247MLDB',
    [`${SURVEYID}X${STRAINBODY4GID}X248187`]: 'D248MLS',
    [`${SURVEYID}X${STRAINBODY4GID}X248189`]: 'D250MLA',
}

const strainBody5 = {
    [`${SURVEYID}X${STRAINBODY5GID}X248129`]: 'X500Q',
    [`${SURVEYID}X${STRAINBODY5GID}X248130`]: 'X501Q',
    [`${SURVEYID}X${STRAINBODY5GID}X248131`]: 'X192Q',
    [`${SURVEYID}X${STRAINBODY5GID}X248142`]: 'D203ML',
    [`${SURVEYID}X${STRAINBODY5GID}X248143A`]: 'D204MLDA',
    [`${SURVEYID}X${STRAINBODY5GID}X248143B`]: 'D204MLDB',
    [`${SURVEYID}X${STRAINBODY5GID}X248144`]: 'D205MLS',
    [`${SURVEYID}X${STRAINBODY5GID}X248146`]: 'D207MLA',
    [`${SURVEYID}X${STRAINBODY5GID}X248147`]: 'E208MD',
    [`${SURVEYID}X${STRAINBODY5GID}X248148`]: 'E209MDF',
    [`${SURVEYID}X${STRAINBODY5GID}X248149`]: 'E210MDS',
    [`${SURVEYID}X${STRAINBODY5GID}X248150`]: 'E211MDT',
    [`${SURVEYID}X${STRAINBODY5GID}X248151`]: 'E212MDA',
    [`${SURVEYID}X${STRAINBODY5GID}X248152`]: 'E213MDX',
    [`${SURVEYID}X${STRAINBODY5GID}X248153`]: 'E214MDY',
    [`${SURVEYID}X${STRAINBODY5GID}X248154`]: 'E215MDZ',
    [`${SURVEYID}X${STRAINBODY5GID}X248155`]: 'E216MH',
    [`${SURVEYID}X${STRAINBODY5GID}X248156`]: 'E217MHF',
    [`${SURVEYID}X${STRAINBODY5GID}X248157`]: 'E218MHS',
    [`${SURVEYID}X${STRAINBODY5GID}X248158`]: 'E219MHT',
    [`${SURVEYID}X${STRAINBODY5GID}X248159`]: 'E220MHA',
    [`${SURVEYID}X${STRAINBODY5GID}X248160`]: 'E221MHX',
    [`${SURVEYID}X${STRAINBODY5GID}X248161`]: 'E222MHY',
    [`${SURVEYID}X${STRAINBODY5GID}X248162`]: 'E223MHZ',
    [`${SURVEYID}X${STRAINBODY5GID}X248132`]: 'E193ML',
    [`${SURVEYID}X${STRAINBODY5GID}X248133`]: 'E194MLF',
    [`${SURVEYID}X${STRAINBODY5GID}X248134`]: 'E195MLS',
    [`${SURVEYID}X${STRAINBODY5GID}X248135`]: 'E196MLT',
    [`${SURVEYID}X${STRAINBODY5GID}X248136`]: 'E197MLA',
    [`${SURVEYID}X${STRAINBODY5GID}X248137`]: 'E198MLQ',
    [`${SURVEYID}X${STRAINBODY5GID}X248138`]: 'E199MLX',
    [`${SURVEYID}X${STRAINBODY5GID}X248139`]: 'E200MLY',
    [`${SURVEYID}X${STRAINBODY5GID}X248140`]: 'E201MLZ',
    [`${SURVEYID}X${STRAINBODY5GID}X248141`]: 'E202MLQ',
    [`${SURVEYID}X${STRAINBODY5GID}X248163`]: 'D510LR',
    [`${SURVEYID}X${STRAINBODY5GID}X248164`]: 'D511LRD',
    [`${SURVEYID}X${STRAINBODY5GID}X248165`]: 'D512LRS',
    [`${SURVEYID}X${STRAINBODY5GID}X248167`]: 'D514LRA',
    [`${SURVEYID}X${STRAINBODY5GID}X248173`]: 'D229OH',
    [`${SURVEYID}X${STRAINBODY5GID}X248174`]: 'D230CHC',
    [`${SURVEYID}X${STRAINBODY5GID}X248175A`]: 'D231OHDA',
    [`${SURVEYID}X${STRAINBODY5GID}X248175B`]: 'D231OHDB',
    [`${SURVEYID}X${STRAINBODY5GID}X248176`]: 'D232OHS',
    [`${SURVEYID}X${STRAINBODY5GID}X248178`]: 'D234OHA',
    [`${SURVEYID}X${STRAINBODY5GID}X248179`]: 'D235XD',
    [`${SURVEYID}X${STRAINBODY5GID}X248180`]: 'D236CDC',
    [`${SURVEYID}X${STRAINBODY5GID}X248181A`]: 'D237XDDA',
    [`${SURVEYID}X${STRAINBODY5GID}X248181B`]: 'D237XDDB',
    [`${SURVEYID}X${STRAINBODY5GID}X248182`]: 'D238XDS',
    [`${SURVEYID}X${STRAINBODY5GID}X248184`]: 'D240XDA',
}

const strainBody6 = {
    [`${SURVEYID}X${STRAINBODY6GID}X248190`]: 'X251Q',
    [`${SURVEYID}X${STRAINBODY6GID}X248191`]: 'X252Q',
    [`${SURVEYID}X${STRAINBODY6GID}X248192`]: 'D253RR',
    [`${SURVEYID}X${STRAINBODY6GID}X248193A`]: 'D254RRDA',
    [`${SURVEYID}X${STRAINBODY6GID}X248193B`]: 'D254RRDB',
    [`${SURVEYID}X${STRAINBODY6GID}X248194`]: 'D255RRS',
    [`${SURVEYID}X${STRAINBODY6GID}X249176`]: 'D257RRA',
    [`${SURVEYID}X${STRAINBODY6GID}X248213`]: 'X282Q',
    [`${SURVEYID}X${STRAINBODY6GID}X248197`]: 'E528RD',
    [`${SURVEYID}X${STRAINBODY6GID}X248198`]: 'E529TDF',
    [`${SURVEYID}X${STRAINBODY6GID}X248199`]: 'E530TDS',
    [`${SURVEYID}X${STRAINBODY6GID}X248200`]: 'E531TDT',
    [`${SURVEYID}X${STRAINBODY6GID}X248201`]: 'E532TDA',
    [`${SURVEYID}X${STRAINBODY6GID}X248202`]: 'E533TDX',
    [`${SURVEYID}X${STRAINBODY6GID}X248203`]: 'E534TDY',
    [`${SURVEYID}X${STRAINBODY6GID}X248204`]: 'E535TDZ',
    [`${SURVEYID}X${STRAINBODY6GID}X248214`]: 'D549OE',
    [`${SURVEYID}X${STRAINBODY6GID}X248215`]: 'D550OED',
    [`${SURVEYID}X${STRAINBODY6GID}X248216`]: 'D551OES',
    // [`${SURVEYID}X${STRAINBODY6GID}X4986`]: 'D551OES',
    // [`${SURVEYID}X${STRAINBODY6GID}X4987`]: 'D552OET',
    [`${SURVEYID}X${STRAINBODY6GID}X248218`]: 'D553OEA',
    [`${SURVEYID}X${STRAINBODY6GID}X248205`]: 'E266RD',
    [`${SURVEYID}X${STRAINBODY6GID}X248206`]: 'E267RDF',
    [`${SURVEYID}X${STRAINBODY6GID}X248207`]: 'E268RDS',
    [`${SURVEYID}X${STRAINBODY6GID}X248208`]: 'E269RDT',
    [`${SURVEYID}X${STRAINBODY6GID}X248209`]: 'E270RDA',
    [`${SURVEYID}X${STRAINBODY6GID}X248210`]: 'E271RDX',
    [`${SURVEYID}X${STRAINBODY6GID}X248211`]: 'E272RDY',
    [`${SURVEYID}X${STRAINBODY6GID}X248212`]: 'E273RDZ',
    [`${SURVEYID}X${STRAINBODY6GID}X248219`]: 'E283OL',
    [`${SURVEYID}X${STRAINBODY6GID}X248220`]: 'E284OLF',
    [`${SURVEYID}X${STRAINBODY6GID}X248221`]: 'E285OLS',
    [`${SURVEYID}X${STRAINBODY6GID}X248222`]: 'E286OLT',
    [`${SURVEYID}X${STRAINBODY6GID}X248223`]: 'E287OLA',
    [`${SURVEYID}X${STRAINBODY6GID}X248224`]: 'E288OLX',
    [`${SURVEYID}X${STRAINBODY6GID}X248225`]: 'E289OLY',
    [`${SURVEYID}X${STRAINBODY6GID}X248226`]: 'E290OLZ',
    [`${SURVEYID}X${STRAINBODY6GID}X248478`]: 'ACE1',
    [`${SURVEYID}X${STRAINBODY6GID}X248479`]: 'ACE2',
    [`${SURVEYID}X${STRAINBODY6GID}X248480`]: 'ACE3',
    [`${SURVEYID}X${STRAINBODY6GID}X248481`]: 'ACE4',
    [`${SURVEYID}X${STRAINBODY6GID}X248482`]: 'ACE5',
    [`${SURVEYID}X${STRAINBODY6GID}X248483`]: 'ACE6',
    [`${SURVEYID}X${STRAINBODY6GID}X248484`]: 'ACE7',
    [`${SURVEYID}X${STRAINBODY6GID}X248485`]: 'ACE8',
    [`${SURVEYID}X${STRAINBODY6GID}X248486`]: 'ACE9',
    [`${SURVEYID}X${STRAINBODY6GID}X248487`]: 'ACE10',
    [`${SURVEYID}X${STRAINBODY6GID}X248307`]: 'D388OE',
    [`${SURVEYID}X${STRAINBODY6GID}X248308A`]: 'D389OEDA',
    [`${SURVEYID}X${STRAINBODY6GID}X248308B`]: 'D389OEDB',
    [`${SURVEYID}X${STRAINBODY6GID}X248309`]: 'D390OES',
    [`${SURVEYID}X${STRAINBODY6GID}X248310`]: 'D392OEA',
    [`${SURVEYID}X${STRAINBODY6GID}X248316`]: 'E541OL',
    [`${SURVEYID}X${STRAINBODY6GID}X248317`]: 'E542OLF',
    [`${SURVEYID}X${STRAINBODY6GID}X248318`]: 'E543OLS',
    [`${SURVEYID}X${STRAINBODY6GID}X248319`]: 'E544OLA',
    [`${SURVEYID}X${STRAINBODY6GID}X248320`]: 'E545OLX',
    [`${SURVEYID}X${STRAINBODY6GID}X248321`]: 'E546OLZ',
    [`${SURVEYID}X${STRAINBODY6GID}X248311`]: 'D393OLC',
    [`${SURVEYID}X${STRAINBODY6GID}X248312`]: 'D394OLD',
    [`${SURVEYID}X${STRAINBODY6GID}X248313`]: 'D395OLQ',
    [`${SURVEYID}X${STRAINBODY6GID}X248314`]: 'D396OLS',
    [`${SURVEYID}X${STRAINBODY6GID}X248315`]: 'D398OLA',
    [`${SURVEYID}X${STRAINBODY6GID}X248322`]: 'D413OHC',
    [`${SURVEYID}X${STRAINBODY6GID}X248323`]: 'D414OHF',
    [`${SURVEYID}X${STRAINBODY6GID}X248324`]: 'D415OHD',
    [`${SURVEYID}X${STRAINBODY6GID}X248325`]: 'D416OHS',
    [`${SURVEYID}X${STRAINBODY6GID}X248326`]: 'D418OHA',
    [`${SURVEYID}X${STRAINBODY6GID}X248327`]: 'D419OHC',
    [`${SURVEYID}X${STRAINBODY6GID}X248328`]: 'D420OHDA',
    [`${SURVEYID}X${STRAINBODY6GID}X248329`]: 'D421OHS',
    [`${SURVEYID}X${STRAINBODY6GID}X248330`]: 'D423OHA',
    [`${SURVEYID}X${STRAINBODY6GID}X248008`]: 'E028EH',
    [`${SURVEYID}X${STRAINBODY6GID}X248009`]: 'E029EHF',
    [`${SURVEYID}X${STRAINBODY6GID}X248010`]: 'E030EHS',
    [`${SURVEYID}X${STRAINBODY6GID}X248011`]: 'E031EHT',
    [`${SURVEYID}X${STRAINBODY6GID}X248012`]: 'E032EHA',
    [`${SURVEYID}X${STRAINBODY6GID}X248013`]: 'E033EHX',
    [`${SURVEYID}X${STRAINBODY6GID}X248014`]: 'E034EHY',
    [`${SURVEYID}X${STRAINBODY6GID}X248015`]: 'E035EHZ',
    [`${SURVEYID}X${STRAINBODY6GID}X248016`]: 'E037WH',
    [`${SURVEYID}X${STRAINBODY6GID}X248017`]: 'E038WHF',
    [`${SURVEYID}X${STRAINBODY6GID}X248018`]: 'E039WHS',
    [`${SURVEYID}X${STRAINBODY6GID}X248019`]: 'E040WHT',
    [`${SURVEYID}X${STRAINBODY6GID}X248020`]: 'E041WHA',
    [`${SURVEYID}X${STRAINBODY6GID}X248021`]: 'E042WHX',
    [`${SURVEYID}X${STRAINBODY6GID}X248022`]: 'E043WHY',
    [`${SURVEYID}X${STRAINBODY6GID}X248023`]: 'E044WHZ',
    [`${SURVEYID}X${STRAINBODY6GID}X248024`]: 'D045WR',
    [`${SURVEYID}X${STRAINBODY6GID}X248025`]: 'D046WRD',
    [`${SURVEYID}X${STRAINBODY6GID}X248026`]: 'D047WRS',
    [`${SURVEYID}X${STRAINBODY6GID}X248028`]: 'D049WRA',
    [`${SURVEYID}X${STRAINBODY6GID}X248029`]: 'D050WE',
    [`${SURVEYID}X${STRAINBODY6GID}X248030`]: 'D051WED',
    [`${SURVEYID}X${STRAINBODY6GID}X248031`]: 'D052WES',
    [`${SURVEYID}X${STRAINBODY6GID}X248032`]: 'D053WET',
    [`${SURVEYID}X${STRAINBODY6GID}X248033`]: 'D054WEA',
    [`${SURVEYID}X${STRAINBODY6GID}X248034`]: 'D060WH',
    [`${SURVEYID}X${STRAINBODY6GID}X248035`]: 'D061WHD',
    [`${SURVEYID}X${STRAINBODY6GID}X248036`]: 'D062WHS',
    [`${SURVEYID}X${STRAINBODY6GID}X248038`]: 'D064WHA',
    [`${SURVEYID}X${STRAINBODY6GID}X248039`]: 'D065FE',
    [`${SURVEYID}X${STRAINBODY6GID}X248040`]: 'D066FED',
    [`${SURVEYID}X${STRAINBODY6GID}X248041`]: 'D067FES',
    [`${SURVEYID}X${STRAINBODY6GID}X248043`]: 'D069FEA',
    [`${SURVEYID}X${STRAINBODY6GID}X248043`]: 'D069FEA',
    [`${SURVEYID}X${STRAINBODY6GID}X248054`]: 'D090HR',
    [`${SURVEYID}X${STRAINBODY6GID}X248062`]: 'D091CRC',
    [`${SURVEYID}X${STRAINBODY6GID}X248055`]: 'D092HRS',
    [`${SURVEYID}X${STRAINBODY6GID}X248056`]: 'D093HRA',
    [`${SURVEYID}X${STRAINBODY6GID}X248063`]: 'E107HR',
    [`${SURVEYID}X${STRAINBODY6GID}X248064`]: 'E108HRQ',
    [`${SURVEYID}X${STRAINBODY6GID}X248065`]: 'E109HRF',
    [`${SURVEYID}X${STRAINBODY6GID}X248066`]: 'E110HRS',
    [`${SURVEYID}X${STRAINBODY6GID}X248067`]: 'E111HRT',
    [`${SURVEYID}X${STRAINBODY6GID}X248068`]: 'E112HRA',
    [`${SURVEYID}X${STRAINBODY6GID}X248069`]: 'E113HRX',
    [`${SURVEYID}X${STRAINBODY6GID}X248070`]: 'E114HRY',
    [`${SURVEYID}X${STRAINBODY6GID}X248071`]: 'E115HRZ',
    [`${SURVEYID}X${STRAINBODY6GID}X248072`]: 'E116HR',
    [`${SURVEYID}X${STRAINBODY6GID}X248073`]: 'E117HRF',
    [`${SURVEYID}X${STRAINBODY6GID}X248074`]: 'E118HRS',
    [`${SURVEYID}X${STRAINBODY6GID}X248075`]: 'E119HRT',
    [`${SURVEYID}X${STRAINBODY6GID}X248076`]: 'E120HRA',
    [`${SURVEYID}X${STRAINBODY6GID}X248077`]: 'E121HRX',
    [`${SURVEYID}X${STRAINBODY6GID}X248078`]: 'E122HRY',
    [`${SURVEYID}X${STRAINBODY6GID}X248079`]: 'E123HRZ',
    [`${SURVEYID}X${STRAINBODY6GID}X248044`]: 'D070HE',
    [`${SURVEYID}X${STRAINBODY6GID}X248045A`]: 'D071HEDA',
    [`${SURVEYID}X${STRAINBODY6GID}X248045B`]: 'D071HEDB',
    [`${SURVEYID}X${STRAINBODY6GID}X248046`]: 'D072HES',
    [`${SURVEYID}X${STRAINBODY6GID}X248048`]: 'D074HEA',
    [`${SURVEYID}X${STRAINBODY6GID}X248049`]: 'D075HD',
    [`${SURVEYID}X${STRAINBODY6GID}X248050A`]: 'D076HDDA',
    [`${SURVEYID}X${STRAINBODY6GID}X248050B`]: 'D076HDDB',
    [`${SURVEYID}X${STRAINBODY6GID}X248051`]: 'D077HDS',
    [`${SURVEYID}X${STRAINBODY6GID}X248053`]: 'D079HDA',
    [`${SURVEYID}X${STRAINBODY6GID}X248235`]: 'E309PD',
    [`${SURVEYID}X${STRAINBODY6GID}X248236`]: 'E310PDF',
    [`${SURVEYID}X${STRAINBODY6GID}X248237`]: 'E311PDS',
    [`${SURVEYID}X${STRAINBODY6GID}X248238`]: 'E312PDT',
    [`${SURVEYID}X${STRAINBODY6GID}X248239`]: 'E313PDA',
    [`${SURVEYID}X${STRAINBODY6GID}X248240`]: 'E314PDX',
    [`${SURVEYID}X${STRAINBODY6GID}X248241`]: 'E315PDY',
    [`${SURVEYID}X${STRAINBODY6GID}X248242`]: 'E316PDZ',
    [`${SURVEYID}X${STRAINBODY6GID}X248260`]: 'E342FR',
    [`${SURVEYID}X${STRAINBODY6GID}X248261`]: 'E343FRF',
    [`${SURVEYID}X${STRAINBODY6GID}X248262`]: 'E344FRS',
    [`${SURVEYID}X${STRAINBODY6GID}X248263`]: 'E345FRT',
    [`${SURVEYID}X${STRAINBODY6GID}X248264`]: 'E346FRA',
    [`${SURVEYID}X${STRAINBODY6GID}X248265`]: 'E347FRX',
    [`${SURVEYID}X${STRAINBODY6GID}X248266`]: 'E348FRY',
    [`${SURVEYID}X${STRAINBODY6GID}X248267`]: 'E349FRZ',
}

const strainBody7 = {
    [`${SURVEYID}X${STRAINBODY7GID}X248080`]: 'E124OL',
    [`${SURVEYID}X${STRAINBODY7GID}X248081`]: 'E125OLF',
    [`${SURVEYID}X${STRAINBODY7GID}X248082`]: 'E126OLS',
    [`${SURVEYID}X${STRAINBODY7GID}X248083`]: 'E127OLT',
    [`${SURVEYID}X${STRAINBODY7GID}X248084`]: 'E128OLA',
    [`${SURVEYID}X${STRAINBODY7GID}X248085`]: 'E129OLX',
    [`${SURVEYID}X${STRAINBODY7GID}X248086`]: 'E130OLY',
    [`${SURVEYID}X${STRAINBODY7GID}X248087`]: 'E131OLZ',
}

const strainBody8 = {
    [`${SURVEYID}X${STRAINBODY8GID}X248096`]: 'D148TD',
    [`${SURVEYID}X${STRAINBODY8GID}X248097A`]: 'D149TDDA',
    [`${SURVEYID}X${STRAINBODY8GID}X248097B`]: 'D149TDDB',
    [`${SURVEYID}X${STRAINBODY8GID}X248098`]: 'D150TDS',
    [`${SURVEYID}X${STRAINBODY8GID}X248100`]: 'D152TDA',
    [`${SURVEYID}X${STRAINBODY8GID}X248101`]: 'D153TR',
    [`${SURVEYID}X${STRAINBODY8GID}X248102A`]: 'D154TRDA',
    [`${SURVEYID}X${STRAINBODY8GID}X248102B`]: 'D154TRDB',
    [`${SURVEYID}X${STRAINBODY8GID}X248103`]: 'D155TRS',
    [`${SURVEYID}X${STRAINBODY8GID}X248105`]: 'D157TRA',
    [`${SURVEYID}X${STRAINBODY8GID}X248088`]: 'E140TD',
    [`${SURVEYID}X${STRAINBODY8GID}X248089`]: 'E141TDF',
    [`${SURVEYID}X${STRAINBODY8GID}X248090`]: 'E142TDS',
    [`${SURVEYID}X${STRAINBODY8GID}X248091`]: 'E143TDT',
    [`${SURVEYID}X${STRAINBODY8GID}X248092`]: 'E144TDA',
    [`${SURVEYID}X${STRAINBODY8GID}X248093`]: 'E145TDX',
    [`${SURVEYID}X${STRAINBODY8GID}X248094`]: 'E146TDY',
    [`${SURVEYID}X${STRAINBODY8GID}X248095`]: 'E147TDZ',
    [`${SURVEYID}X${STRAINBODY8GID}X248340`]: 'D424TR',
    [`${SURVEYID}X${STRAINBODY8GID}X248341A`]: 'D425TRDA',
    [`${SURVEYID}X${STRAINBODY8GID}X248341B`]: 'D425TRDB',
    [`${SURVEYID}X${STRAINBODY8GID}X248342`]: 'D426TRS',
    [`${SURVEYID}X${STRAINBODY8GID}X248344`]: 'D428TRA',
    [`${SURVEYID}X${STRAINBODY8GID}X248106`]: 'D164OE',
    [`${SURVEYID}X${STRAINBODY8GID}X248107A`]: 'D165OEDA',
    [`${SURVEYID}X${STRAINBODY8GID}X248107B`]: 'D165OEDB',
    [`${SURVEYID}X${STRAINBODY8GID}X248108`]: 'D166OES',
    [`${SURVEYID}X${STRAINBODY8GID}X248110`]: 'D168OEA',
    [`${SURVEYID}X${STRAINBODY8GID}X248111`]: 'D174TD',
    [`${SURVEYID}X${STRAINBODY8GID}X248112A`]: 'D175TDDA',
    [`${SURVEYID}X${STRAINBODY8GID}X248112B`]: 'D175TDDB',
    [`${SURVEYID}X${STRAINBODY8GID}X248113`]: 'D176TDS',
    [`${SURVEYID}X${STRAINBODY8GID}X248115`]: 'D178TDA',
    [`${SURVEYID}X${STRAINBODY8GID}X248116`]: 'D179TR',
    [`${SURVEYID}X${STRAINBODY8GID}X248117A`]: 'D180TRDA',
    [`${SURVEYID}X${STRAINBODY8GID}X248117B`]: 'D180TRDB',
    [`${SURVEYID}X${STRAINBODY8GID}X248118`]: 'D181TRS',
    [`${SURVEYID}X${STRAINBODY8GID}X248120`]: 'D183TRA',
    [`${SURVEYID}X${STRAINBODY8GID}X248121`]: 'E184TD',
    [`${SURVEYID}X${STRAINBODY8GID}X248122`]: 'E185TDF',
    [`${SURVEYID}X${STRAINBODY8GID}X248123`]: 'E186TDS',
    [`${SURVEYID}X${STRAINBODY8GID}X248124`]: 'E187TDT',
    [`${SURVEYID}X${STRAINBODY8GID}X248125`]: 'E188TDA',
    [`${SURVEYID}X${STRAINBODY8GID}X248126`]: 'E189TDX',
    [`${SURVEYID}X${STRAINBODY8GID}X248127`]: 'E190TDY',
    [`${SURVEYID}X${STRAINBODY8GID}X248128`]: 'E191TDZ',
    [`${SURVEYID}X${STRAINBODY8GID}X248345`]: 'D434TR',
    [`${SURVEYID}X${STRAINBODY8GID}X248346A`]: 'D435TRDA',
    [`${SURVEYID}X${STRAINBODY8GID}X248346B`]: 'D435TRDB',
    [`${SURVEYID}X${STRAINBODY8GID}X248347`]: 'D436TRS',
    // [`${SURVEYID}X${STRAINBODY8GID}X5118`]: 'D437TRT',
    [`${SURVEYID}X${STRAINBODY8GID}X248349`]: 'D438TRA',
    [`${SURVEYID}X${STRAINBODY8GID}X248350`]: 'D547TR',
    [`${SURVEYID}X${STRAINBODY8GID}X249174`]: 'D547TRS',
    [`${SURVEYID}X${STRAINBODY8GID}X248501`]: 'D549TRD',
    [`${SURVEYID}X${STRAINBODY8GID}X248506`]: 'D551TRA',
    [`${SURVEYID}X${STRAINBODY8GID}X248351`]: 'D548TR',
    [`${SURVEYID}X${STRAINBODY8GID}X248507A`]: 'D552TRDA',
    [`${SURVEYID}X${STRAINBODY8GID}X248507B`]: 'D552TRDB',
    [`${SURVEYID}X${STRAINBODY8GID}X249175`]: 'D548TRS',
    [`${SURVEYID}X${STRAINBODY8GID}X248512`]: 'D554TRA',
    [`${SURVEYID}X${STRAINBODY8GID}X248331`]: 'E535DL',
    [`${SURVEYID}X${STRAINBODY8GID}X248337`]: 'X554OL',
    [`${SURVEYID}X${STRAINBODY8GID}X248338`]: 'X555OL',
    [`${SURVEYID}X${STRAINBODY8GID}X248332`]: 'E536DLA',
    [`${SURVEYID}X${STRAINBODY8GID}X248333`]: 'E537DLS',
    [`${SURVEYID}X${STRAINBODY8GID}X248334`]: 'E538DL',
    [`${SURVEYID}X${STRAINBODY8GID}X248335`]: 'X556OL',
    [`${SURVEYID}X${STRAINBODY8GID}X248336`]: 'X557OL',
    [`${SURVEYID}X${STRAINBODY8GID}X248375`]: 'E539DLA',
    [`${SURVEYID}X${STRAINBODY8GID}X248339`]: 'EE540DLS',
}

const strainDemographics = {
    [`${SURVEYID}X${STRAINDEMOGRAPHICSGID}X247998`]: 'S002SuNm',
    [`${SURVEYID}X${STRAINDEMOGRAPHICSGID}X248489`]: 'S003SuNm',
    [`${SURVEYID}X${STRAINDEMOGRAPHICSGID}X247999`]: 'S003SUID',
    [`${SURVEYID}X${STRAINDEMOGRAPHICSGID}X248000`]: 'S004DAT',
    [`${SURVEYID}X${STRAINDEMOGRAPHICSGID}X248001`]: 'X005DOB',
    [`${SURVEYID}X${STRAINDEMOGRAPHICSGID}X248002`]: 'X006AGE',
    [`${SURVEYID}X${STRAINDEMOGRAPHICSGID}X248490`]: 'X061RACE',
    [`${SURVEYID}X${STRAINDEMOGRAPHICSGID}X248003`]: 'X007SEX',
    [`${SURVEYID}X${STRAINDEMOGRAPHICSGID}X248491`]: 'X0071GEN',
    [`${SURVEYID}X${STRAINDEMOGRAPHICSGID}X248493`]: 'X0072GEN',
    [`${SURVEYID}X${STRAINDEMOGRAPHICSGID}X248492`]: 'X0072SEX',
    [`${SURVEYID}X${STRAINDEMOGRAPHICSGID}X248005`]: 'X009RELA',
    [`${SURVEYID}X${STRAINDEMOGRAPHICSGID}X248004`]: 'E008CD',
    [`${SURVEYID}X${STRAINDEMOGRAPHICSGID}X248007`]: 'X011BRTH',
    [`${SURVEYID}X${STRAINDEMOGRAPHICSGID}X248006`]: 'X010CHLD',
    [`${SURVEYID}X${STRAINDEMOGRAPHICSGID}X248494`]: 'X011CHLD',
}

const strain = {
    [`${SURVEYID}X${STRAINGID}X247996`]: 'S000INTR',
    [`${SURVEYID}X${STRAINGID}X247997`]: 'S001INST',
}

const k6 = {
    [`${SURVEYID}X${K6GID}X248369`]: 'K61',
    [`${SURVEYID}X${K6GID}X248370`]: 'K62',
    [`${SURVEYID}X${K6GID}X248371`]: 'K63',
    [`${SURVEYID}X${K6GID}X248374`]: 'K64',
    [`${SURVEYID}X${K6GID}X248372`]: 'K65',
    [`${SURVEYID}X${K6GID}X248373`]: 'K66',
    [`${SURVEYID}X${K6GID}X248398`]: 'K67',
    [`${SURVEYID}X${K6GID}X248488`]: 'K68',
    [`${SURVEYID}X${K6GID}X248403`]: 'K69',
    [`${SURVEYID}X${K6GID}X248399`]: 'K70',
    [`${SURVEYID}X${K6GID}X249171`]: 'K71',
    [`${SURVEYID}X${K6GID}X248400`]: 'K72',
    [`${SURVEYID}X${K6GID}X249172`]: 'K73',
    [`${SURVEYID}X${K6GID}X249173`]: 'K74',
    [`${SURVEYID}X${K6GID}X248404`]: 'K75',
    [`${SURVEYID}X${K6GID}X248402`]: 'K76',
    [`${SURVEYID}X${K6GID}X248500`]: 'K666',
    [`${SURVEYID}X${K6GID}X248498`]: 'K664',
    [`${SURVEYID}X${K6GID}X248499`]: 'K665',
    [`${SURVEYID}X${K6GID}X248496`]: 'K662',
    [`${SURVEYID}X${K6GID}X248497`]: 'K663',
    [`${SURVEYID}X${K6GID}X248495`]: 'K661',
}

const summaryScores = {
    [`${SURVEYID}X${SUMMARYGID}X248376`]: 'TotCnt',
    [`${SURVEYID}X${SUMMARYGID}X248377`]: 'EvntCnt',
    [`${SURVEYID}X${SUMMARYGID}X248378`]: 'DiffCnt',
    [`${SURVEYID}X${SUMMARYGID}X248379`]: 'TotSum',
    [`${SURVEYID}X${SUMMARYGID}X248380`]: 'EvntSum',
    [`${SURVEYID}X${SUMMARYGID}X248381`]: 'DiffSum',
    [`${SURVEYID}X${SUMMARYGID}X248382`]: 'Hous',
    [`${SURVEYID}X${SUMMARYGID}X248383`]: 'Educ',
    [`${SURVEYID}X${SUMMARYGID}X248384`]: 'Work',
    [`${SURVEYID}X${SUMMARYGID}X248385`]: 'Trea',
    [`${SURVEYID}X${SUMMARYGID}X248386`]: 'Mari',
    [`${SURVEYID}X${SUMMARYGID}X248387`]: 'Chil',
    [`${SURVEYID}X${SUMMARYGID}X248388`]: 'Repr',
    [`${SURVEYID}X${SUMMARYGID}X248389`]: 'Fina',
    [`${SURVEYID}X${SUMMARYGID}X248390`]: 'Lega',
    [`${SURVEYID}X${SUMMARYGID}X248391`]: 'Rela',
    [`${SURVEYID}X${SUMMARYGID}X248392`]: 'Deat',
    [`${SURVEYID}X${SUMMARYGID}X248393`]: 'Life',
    [`${SURVEYID}X${SUMMARYGID}X248393`]: 'Poss',
    [`${SURVEYID}X${SUMMARYGID}X248395`]: 'PHQ',
    [`${SURVEYID}X${SUMMARYGID}X248396`]: 'K6',
    [`${SURVEYID}X${SUMMARYGID}X248397`]: 'Health',
}

// const ACEs = {
//     [`${SURVEYID}X${ACEGID}X248478`]: 'ACE1',
//     [`${SURVEYID}X${ACEGID}X248479`]: 'ACE2',
//     [`${SURVEYID}X${ACEGID}X248480`]: 'ACE3',
//     [`${SURVEYID}X${ACEGID}X248481`]: 'ACE4',
//     [`${SURVEYID}X${ACEGID}X248482`]: 'ACE5',
//     [`${SURVEYID}X${ACEGID}X248483`]: 'ACE6',
//     [`${SURVEYID}X${ACEGID}X248484`]: 'ACE7',
// }

const variableMapping = {
    ...PHQ,
    ...strainBody1,
    ...strainBody2,
    ...strainBody3,
    ...strainBody4,
    ...strainBody5,
    ...strainBody6,
    ...strainBody7,
    ...strainBody8,
    ...strainDemographics,
    ...strain,
    ...k6,
    ...summaryScores,
    // ...ACEs,
}

// @ts-ignore
const fetcher = (...args) => fetch(...args).then(res => res.json())

const urls = {
    userData: (userId: string) => userId &&
        process.env.NODE_ENV === 'development' ?
        `https://lifestresstest.com/wp-json/lifestresstest/limesurvey/${userId}` :
        `/wp-json/lifestresstest/limesurvey/${userId}`,

    publicData: process.env.NODE_ENV === 'development' ?
        `https://lifestresstest.com/wp-json/lifestresstest/public` :
        `/wp-json/lifestresstest/public`,

    report: (userId: string) => userId &&
        process.env.NODE_ENV === 'development' ?
        `https://lifestresstest.com/wp-json/lifestresstest/report/${userId}` :
        `/wp-json/lifestresstest/report/${userId}`,
}

const postReport = ({ userId, file }) => {
    const body = new FormData()
    body.append('file', file)
    console.log('file', file)
    return fetch(urls.report(userId), { method: 'post', body })
}

export {
    urls,
    fetcher,
    postReport,
    variableMapping,
}
