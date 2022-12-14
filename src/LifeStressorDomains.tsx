import Blurb from "./Blurb"
import Indicator from "./Indicator"
import { H1 } from "./Typography"
import { capitalize, slugify } from "./util"

function LifeStressorDomains({ stressorDomains }) {
    return (
        <div>
            <div className='text-center'>
                <div className='space-y-2'>
                    <H1>12 Life stressor domains</H1>
                    <Blurb>Stressors can occur in the different life domains shown below. Knowing which life domain(s) are most impacted can lead to more focused strategies for reducing stress and improving resilience.</Blurb>
                </div>
            </div>
            <div className='flex flex-wrap items-center justify-center'>
                {Object.keys(stressorDomains).map(d => (
                    <Indicator
                        key={d}
                        src={`/images/domain-${slugify(d)}.png`}
                        title={capitalize(d)}
                        value={stressorDomains[d].value}
                        // total={stressorDomains[d].total}
                        className='w-1/6'
                    />
                ))}
            </div>
        </div>
    )
}

export default LifeStressorDomains