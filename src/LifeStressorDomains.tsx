import BlurbWithOutline from "./BlurbWithOutline"
import Indicator from "./Indicator"
import { H1 } from "./Typography"
import { capitalize, imgDir, slugify } from "./util"

function LifeStressorDomains({ stressorDomains }) {
    return (
        <div>
            <div className='text-center relative'>
                <BlurbWithOutline className='text-coral border-b-0 before:[height:100px] after:[height:100px]'>
                    Stressors can occur in the different life domains shown below. Knowing which life domain(s) are most impacted can lead to more focused strategies for reducing stress and improving resilience.
                </BlurbWithOutline>
                <H1 className='[width:518px] [padding:32px] [top:-52px] [left:50%] [transform:translateX(-50%)] bg-white mx-auto absolute'>12 Life stressor domains</H1>
            </div>
            {/* <div className='flex flex-wrap items-center justify-center'> */}
            <div className='flex flex-wrap items-center justify-center relative pb-8 after:[background:white] after:[height:280px] after:[width:1px] after:[right:-1px] after:[top:0] after:absolute after:content-" " before:[background:white] before:[height:280px] before:[width:1px] before:[left:-1px] before:[top:0] before:absolute before:content-" " border-b border-l border-r'>
                {Object.keys(stressorDomains).map(d => (
                    <Indicator
                        key={d}
                        src={`${imgDir}/domain-${slugify(d)}.png`}
                        title={capitalize(d)}
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