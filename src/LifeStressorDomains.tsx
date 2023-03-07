import BlurbWithOutline from "./BlurbWithOutline"
import Indicator from "./Indicator"
import { H1 } from "./Typography"
import { imgDir } from "./util"

const classes = [
    `border-b border-r w-1/6 h-[133px]`,
    `border-b border-r w-1/6 h-[133px]`,
    `border-b border-r w-1/6 h-[133px]`,
    `border-b border-r w-1/6 h-[133px]`,
    `border-b border-r w-1/6 h-[133px]`,
    `border-b border-r w-1/6 h-[133px]`,
    `border-r w-1/6 h-[133px] pt-2`,
    `border-r w-1/6 h-[133px] pt-2`,
    `border-r w-1/6 h-[133px] pt-2`,
    `border-r w-1/6 h-[133px] pt-2`,
    `border-r w-1/6 h-[133px] pt-2`,
    `w-1/6 h-[133px] pt-2`,
]

function LifeStressorDomains({ stressorDomains }) {
    return (
        <div>
            <div className='text-center relative'>
                <BlurbWithOutline className='[margin-top:100px] text-coral border-b-0 before:[height:116px] after:[height:116px]'>
                    Stressors can occur in the different life domains shown below. Knowing which life domain(s) are most impacted can lead to more focused strategies for reducing stress and improving resilience.
                </BlurbWithOutline>
                <H1 className='[width:518px] [padding:32px] [top:-52px] [left:50%] [transform:translateX(-50%)] bg-white mx-auto absolute'>12 Life stressor domains</H1>
            </div>
            <div className='border-black flex flex-wrap items-start justify-center relative pb-8 after:[background:white] after:[height:292px] after:[width:3px] after:[right:-2px] after:[top:0] after:absolute after:content-" " before:[background:white] before:[height:292px] before:[width:3px] before:[left:-2px] before:[top:0] before:absolute before:content-" " border-b border-l border-r'>
                {Object.keys(stressorDomains).map((d, i) => (
                    <Indicator
                        key={d}
                        src={`${imgDir}/${stressorDomains[d].img}`}
                        title={d}
                        value={stressorDomains[d].value}
                        total={stressorDomains[d].total}
                        className={`border-black ${classes[i]}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default LifeStressorDomains