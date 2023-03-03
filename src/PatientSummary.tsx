import BlurbWithOutline from "./BlurbWithOutline"
import { Emphasis, H1, H2 } from "./Typography"

function Quote(props) {
    return <p className='text-coral italic' {...props} />
}

const isSectionEnd = (label: string) => {
    return (label.toLowerCase() === 'had thoughts of harming others') ||
        (label.toLowerCase() === 'felt hopeless')
}

function PriorityResponseRow({ label, response, isCritical }) {
    const bg = isCritical ? 'critical' : 'white'
    const borderColor = isCritical ? 'gray-900' : isSectionEnd(label) ? 'black' : 'gray-400'

    console.log('label', label, borderColor)

    return (
        <>
            <div className={`p-4 border-b border-${borderColor} col-span-4 bg-${bg}`}>
                {label}
            </div>
            <div className={`p-4 border-l border-b border-l-black border-${borderColor} col-span-1 bg-${bg}`}>
                {response}
            </div>
        </>
    )
}

const scaleMap = {
    0: 'never',
    1: 'very rarely',
    2: 'not too often',
    3: 'fairly often',
    4: 'very often',
}

const is0or1 = x => x === '0' || x === '1'

function useSummaryData(userData) {

    return {
        'suicide attempt': {
            response: userData['K661'] === 1 ? 'yes' : 'no',
            isCritical: userData['K661'] === 1,
        },
        'suicidal ideation: had thoughts of taking own life': {
            response: userData['K662'] === 1 ? 'yes' : 'no',
            isCritical: userData['K662'] === 1,
        },
        'suicidal ideation: felt friends and family would be better off': {
            response: userData['K663'] === 1 ? 'yes' : 'no',
            isCritical: userData['K663'] === 1,
        },
        'had thoughts of self-harm': {
            response: userData['K664'] === 1 ? 'yes' : 'no',
            isCritical: userData['K664'] === 1,
        },
        'had thoughts of harming others': {
            response: userData['K665'] === 1 ? 'yes' : 'no',
            isCritical: userData['K665'] === 1,
        },
        // 'experienced ongoing maltreatment, abuse or neglect': {
        //     response: userData['K665'] === 1 ? 'yes' : 'no',
        //     isCriticall: userData['K665'] === 1,
        // },
        'felt worthless': {
            response: scaleMap[userData['K65']],
            isCritical: userData['K65'] > 2,
        },
        'felt hopeless': {
            response: scaleMap[userData['K62']],
            isCritical: userData['K62'] > 2,
        },
        'happy or joyful': {
            response: scaleMap[userData['K67']],
            isCritical: is0or1(userData['K67']),
        },
        'felt connected to others': {
            response: scaleMap[userData['K72']],
            isCritical: is0or1(userData['K72']),
        },
        'felt connected to nature': {
            response: scaleMap[userData['K70']],
            isCritical: is0or1(userData['K70']),
        },
        'felt sense of purpose': {
            response: scaleMap[userData['K68']],
            isCritical: is0or1(userData['K68']),
        },
        // can't find this question on survey
        // 'had access to something in life to improve mood': {
        //     response: scaleMap[userData['K71']],
        //     isCritical: userData['K71'] < 2,
        // },
        'knew how to manage emotions when things were stressful': {
            response: scaleMap[userData['K69']],
            isCritical: is0or1(userData['K69']),
        },
        'had people, resources or knowledge needed to make positive changes': {
            response: scaleMap[userData['K75']],
            isCritical: is0or1(userData['K75']),
        },
    }
}

const CautionSymbol = () => {
    return <span className='mx-4 text-coral-700'>⚠</span>
}

function PatientSummary({
    patientName,
    patientAge,
    patientRace,
    patientGender,
    patientPronouns,
    patientUpbringing,
    patientRelationshipStatus,
    patientMotherIsAlive,
    patientFatherIsAlive,
    additionalInformation,
    userData,
}) {

    let motherIs = ''
    let fatherIs = ''
    if (patientMotherIsAlive === 0) motherIs = 'alive'
    if (patientMotherIsAlive === 1) motherIs = 'not alive'
    if (patientMotherIsAlive === 2) motherIs = 'unknown'

    if (patientFatherIsAlive === 0) fatherIs = 'alive'
    if (patientFatherIsAlive === 1) fatherIs = 'not alive'
    if (patientFatherIsAlive === 2) fatherIs = 'unknown'

    const upbringingMap = {
        A1: 'lived in a household with biological mother and father',
        A2: 'lived in a household with adopted parents',
        A3: 'lived in a household with same-sex parents',
        A4: 'grew up in the foster care system',
        A5: 'was raised by relatives other than biological parents',
        A6: 'had parents who divorced and mother had sole custody',
        A7: 'had parents who divorced and father had sole custody',
        A8: 'had parents who divorced and they had dual custody',
    }

    const relationshipMap = {
        1: 'married',
        2: 'living with partner/ Domestic partnership',
        3: 'serious boyfriend',
        4: 'serious girlfriend',
        5: 'dating',
        6: 'single',
        7: 'widowed',
        8: 'divorced',
        9: 'legally Separated',
        10: 'prefer not to say',
    }

    const summaryData = useSummaryData(userData)

    return (
        <>
            <div className='text-center relative [margin-top:100px]'>
                <BlurbWithOutline className='border-b-0 before:[height:100px!important] after:[height:100px!important]'>
                    <Emphasis>{patientName}</Emphasis> is <Emphasis>{patientAge}</Emphasis> years old.
                    Their relationship status is <Emphasis>{relationshipMap[patientRelationshipStatus]}</Emphasis>.
                    {patientRace ? (<>{` `}Their ethinicity is <Emphasis>{patientRace}</Emphasis>.</>) : null}
                    {patientGender ? (<>{` `}Their gender is <Emphasis>{patientGender}</Emphasis>.</>) : null}
                    {patientPronouns ? (<>{` `}Their pronouns are <Emphasis>{patientPronouns}</Emphasis>.</>) : null}
                    {motherIs ? (
                        <>
                            {` `}Their mother is <Emphasis>{motherIs}</Emphasis>
                        </>
                    ) : null}
                    {fatherIs ? (
                        <>
                            {` `}Their father is <Emphasis>{fatherIs}</Emphasis>.
                        </>
                    ) : null}
                    {
                        upbringingMap[patientUpbringing] ? (
                            <>
                                {` `}They <Emphasis>{upbringingMap[patientUpbringing]}</Emphasis>
                            </>
                        ) : null
                    }
                </BlurbWithOutline>
                <H1 className='[width:382px] [padding:32px] [top:-52px] [left:50%] [transform:translateX(-50%)] bg-white mx-auto absolute'>
                    Patient summary
                </H1>
            </div>
            <div className='grid grid-cols-5 border border-gray-500'>
                <div className="text-center bg-[#d9d9d9] p-4 border-black border-b col-span-5">
                    <H1><CautionSymbol />Priority response: in the last 30 days<CautionSymbol /></H1>
                </div>
                {Object.keys(summaryData).map(x => (
                    <PriorityResponseRow
                        label={x}
                        {...summaryData[x]}
                    />
                ))}
            </div>
            {additionalInformation ? (
                <div className='text-center relative [margin-top:100px]'>
                    <BlurbWithOutline className='border-b-0 before:[height:109px!important] after:[height:109px!important]'>
                        When asked if there was anything stressful that was not covered in the test,
                        <Emphasis> {patientName}</Emphasis> said:
                        <Quote>"{additionalInformation}"</Quote>
                    </BlurbWithOutline>
                    <H2 className='[width:382px] [padding:32px] [top:-52px] [left:50%] [transform:translateX(-50%)] bg-white mx-auto absolute'>
                        Additional information
                    </H2>
                </div>
            ) : null}
        </>
    )
}

export default PatientSummary
