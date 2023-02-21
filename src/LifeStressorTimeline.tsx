import BlurbWithOutline from "./BlurbWithOutline"
import LifeStressorTimelineChart from "./LifeStressorTimelineChart"
import { Emphasis, H1 } from "./Typography"

function LifeStressorTimeline({
    patientName,
    patientAge,
    acuteStressors,
    chronicStressors,
}) {
    return (
        <div className='space-y-8 text-center h-full'>
            <div className="relative">
                <BlurbWithOutline className='max-w-[100%] border-b-0 before:[height:116px] after:[height:116px] text-coral [margin-top:100px]'>People can experience major life
                    stressors known to impact health, wellbeing, and aging over
                    the entire life course. Below is a timeline of the specific
                    stressors <Emphasis>{patientName}</Emphasis> experienced categorized by their reported
                    severity. Knowing when a stressor occurred, and how bad it was,
                    can help identify experiences that were particularly impactful.
                </BlurbWithOutline>
                <H1 className="w-1/2 [padding:32px] [top:-54px] [left:50%] [transform:translateX(-50%)] bg-white mx-auto absolute">Life stressor timeline</H1>
            </div>
            <div className='relative w-full h-[578px] border-black pb-8 after:[background:white] after:[height:532px] after:[width:1px] after:[right:-1px] after:[top:0] after:absolute after:content-" " before:[background:white] before:[height:532px] before:[width:1px] before:[left:-1px] before:[top:0] before:absolute before:content-" " border-b border-l border-r'>
                <LifeStressorTimelineChart
                    patientAge={patientAge}
                    acuteStressors={acuteStressors}
                    chronicStressors={chronicStressors}
                />
            </div>
        </div>
    )
}

export default LifeStressorTimeline