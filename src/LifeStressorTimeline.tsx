import Blurb from "./Blurb"
import LifeStressorTimelineChart from "./LifeStressorTimelineChart"
import { Emphasis, H1 } from "./Typography"

function LifeStressorTimeline({ 
    patientName,
    patientAge,
    acuteStressors,
    chronicStressors,
}) {
    return (
        <div className='space-y-4 text-center'>
            <H1>Life stressor timeline</H1>
            <Blurb className='text-coral'>People can experience major life
                stressors known to impact health, wellbeing, and aging over
                the entire life course. Below is a timeline of the specific
                stressors <Emphasis>{patientName}</Emphasis> experienced categorized by their reported
                severity. Knowing when a stressor occurred, and how bad it was,
                can help identify experiences that were particularly impactful.</Blurb>
                <LifeStressorTimelineChart
                    patientAge={patientAge}
                    acuteStressors={acuteStressors}
                    chronicStressors={chronicStressors}
                />
        </div>
    )
}

export default LifeStressorTimeline