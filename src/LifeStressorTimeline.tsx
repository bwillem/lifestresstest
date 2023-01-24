import BlurbWithOutline from "./BlurbWithOutline"
import LifeStressorTimelineChart from "./LifeStressorTimelineChart"
import { Emphasis, H1 } from "./Typography"

function LifeStressorTimeline({
    patientName,
    patientAge,
    acuteStressors,
    chronicStressors,
    setTimelineIsReady,
}) {
    return (
        <div className='space-y-8 text-center'>
            <div className="relative">
                <BlurbWithOutline className='text-coral [margin-top:100px]'>People can experience major life
                    stressors known to impact health, wellbeing, and aging over
                    the entire life course. Below is a timeline of the specific
                    stressors <Emphasis>{patientName}</Emphasis> experienced categorized by their reported
                    severity. Knowing when a stressor occurred, and how bad it was,
                    can help identify experiences that were particularly impactful.
                </BlurbWithOutline>
                <H1 className="w-1/2 [padding:32px] [top:-54px] [left:50%] [transform:translateX(-50%)] bg-white mx-auto absolute">Life stressor timeline</H1>
            </div>
            <LifeStressorTimelineChart
                patientAge={patientAge}
                acuteStressors={acuteStressors}
                chronicStressors={chronicStressors}
                setTimelineIsReady={setTimelineIsReady}
            />
        </div>
    )
}

export default LifeStressorTimeline