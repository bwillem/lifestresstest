import { useEffect, useRef, useState } from "react"
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
    const bg = isCritical ? 'bg-critical' : 'bg-white'
    const borderColor = isCritical ? 'gray-900' : isSectionEnd(label) ? 'black' : 'gray-400'

    return (
        <>
            <div className={`p-4 border-b border-${borderColor} col-span-4 ${bg}`}>
                {label}
            </div>
            <div className={`p-4 border-l border-b border-l-black border-${borderColor} col-span-1 ${bg}`}>
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

const is0or1 = x => x === 0 || x === 1 || x === 2

function useSummaryData(userData) {

    const _userData = Object.keys(userData)
        .filter(key => key[0] === 'K')
        .reduce((prev, curr) => ({
            ...prev,
            [curr]: parseInt(userData[curr]),
        }), {})

    return {
        'suicide attempt': {
            response: _userData['K661'] === 1 ? 'yes' : 'no',
            isCritical: _userData['K661'] === 1,
        },
        'suicidal ideation: had thoughts of taking own life': {
            response: _userData['K662'] === 1 ? 'yes' : 'no',
            isCritical: _userData['K662'] === 1,
        },
        'suicidal ideation: felt friends and family would be better off': {
            response: _userData['K663'] === 1 ? 'yes' : 'no',
            isCritical: _userData['K663'] === 1,
        },
        'had thoughts of self-harm': {
            response: _userData['K664'] === 1 ? 'yes' : 'no',
            isCritical: _userData['K664'] === 1,
        },
        'had thoughts of harming others': {
            response: _userData['K665'] === 1 ? 'yes' : 'no',
            isCritical: _userData['K665'] === 1,
        },
        // 'experienced ongoing maltreatment, abuse or neglect': {
        //     response: _userData['K665'] === 1 ? 'yes' : 'no',
        //     isCriticall: _userData['K665'] === 1,
        // },
        'felt worthless': {
            response: scaleMap[_userData['K65']],
            isCritical: _userData['K65'] > 2,
        },
        'felt hopeless': {
            response: scaleMap[_userData['K62']],
            isCritical: _userData['K62'] > 2,
        },
        'happy or joyful': {
            response: scaleMap[_userData['K67']],
            isCritical: is0or1(_userData['K67']),
        },
        'felt connected to others': {
            response: scaleMap[_userData['K72']],
            isCritical: is0or1(_userData['K72']),
        },
        'felt connected to nature': {
            response: scaleMap[_userData['K70']],
            isCritical: is0or1(_userData['K70']),
        },
        'felt sense of purpose': {
            response: scaleMap[_userData['K68']],
            isCritical: is0or1(_userData['K68']),
        },
        // can't find this question on survey
        // 'had access to something in life to improve mood': {
        //     response: scaleMap[_userData['K71']],
        //     isCritical: _userData['K71'] < 2,
        // },
        'knew how to manage emotions when things were stressful': {
            response: scaleMap[_userData['K69']],
            isCritical: is0or1(_userData['K69']),
        },
        'had people, resources or knowledge needed to make positive changes': {
            response: scaleMap[_userData['K75']],
            isCritical: is0or1(_userData['K75']),
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

    const ref = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        setHeight(ref.current?.clientHeight || 0)
    }, [ref.current])

    return (
        <>
            <div className='text-center relative [margin-top:64px]'>
                <BlurbWithOutline
                    ref={ref}
                    className={`border-b-0 before:[height:${height}px!important] after:[height:${height}px!important]`}>
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
                                {` `}They <Emphasis>{upbringingMap[patientUpbringing]}.</Emphasis>
                            </>
                        ) : null
                    }
                </BlurbWithOutline>
                <H1 className='[width:382px] [padding:32px] [top:-52px] [left:50%] [transform:translateX(-50%)] bg-white mx-auto absolute'>
                    Patient summary
                </H1>
            </div>
            <div className='mt-2 grid grid-cols-5 border border-gray-500'>
                <div className="text-center bg-[#d9d9d9] p-4 border-black border-b col-span-5">
                    <H1><CautionSymbol />Priority response: in the last 30 days<CautionSymbol /></H1>
                </div>
                {Object.keys(summaryData).map(x => (
                    <PriorityResponseRow
                        key={x}
                        label={x}
                        {...summaryData[x]}
                    />
                ))}
            </div>
            {additionalInformation ? (
                <div className='text-center relative [margin-top:64px]'>
                    <BlurbWithOutline className='before:[height:82px!important] after:[height:82px!important]'>
                        When asked if there was anything stressful that was not covered in the test,{` `}
                        <Emphasis>{patientName}</Emphasis> said:
                        <Quote>"{additionalInformation}"</Quote>
                    </BlurbWithOutline>
                    <H2 className='uppercase [width:340px] [padding:32px] [top:-44px] [left:50%] [transform:translateX(-50%)] bg-white mx-auto absolute'>
                        Additional information
                    </H2>
                </div>
            ) : null}
        </>
    )
}

export default PatientSummary
