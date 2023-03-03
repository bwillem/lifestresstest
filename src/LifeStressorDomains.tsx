import BlurbWithOutline from "./BlurbWithOutline"
import Indicator from "./Indicator"
import { H1 } from "./Typography"
import { imgDir, slugify } from "./util"

function LifeStressorDomains({ stressorDomains }) {
    return (
        <div>
            <div className='text-center relative'>
                <BlurbWithOutline className='[margin-top:100px] text-coral border-b-0 before:[height:100px] after:[height:100px]'>
                    Stressors can occur in the different life domains shown below. Knowing which life domain(s) are most impacted can lead to more focused strategies for reducing stress and improving resilience.
                </BlurbWithOutline>
                <H1 className='[width:518px] [padding:32px] [top:-52px] [left:50%] [transform:translateX(-50%)] bg-white mx-auto absolute'>12 Life stressor domains</H1>
            </div>
            <div className='border-black flex flex-wrap items-center justify-center relative pb-8 after:[background:white] after:[height:271px] after:[width:3px] after:[right:-2px] after:[top:0] after:absolute after:content-" " before:[background:white] before:[height:271px] before:[width:3px] before:[left:-2px] before:[top:0] before:absolute before:content-" " border-b border-l border-r'>
                {Object.keys(stressorDomains).map(d => (
                    <Indicator
                        key={d}
                        src={`${imgDir}/domain-${slugify(d)}.png`}
                        title={d}
                        value={stressorDomains[d].value}
                        total={stressorDomains[d].total}
                        className='w-1/6 mt-8'
                    />
                ))}
            </div>
        </div>
    )
}

export default LifeStressorDomains