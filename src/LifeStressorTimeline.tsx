import { Emphasis, H1, P } from "./Typography"

function LifeStressorTimeline({ patientName, acuteStressors, chronicStressors }) {
    return (
        <div className='space-y-4 text-center'>
            <H1>Life stressor timeline</H1>
            <P className='text-coral-600'>People can experience major life
                stressors known to impact health, wellbeing, and aging over
                the entire life course. Below is a timeline of the specific
                stressors <Emphasis>{patientName}</Emphasis> experienced categorized by their reported
                severity. Knowing when a stressor occurred, and how bad it was,
                can help identify experiences that were particularly impactful.</P>
                {/* <LifeStressorTimelineChart
                /> */}
        </div>
    )
}

export default LifeStressorTimeline