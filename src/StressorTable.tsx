import { H1, H2 } from "./Typography"
import stressorTable from './images/stressor-table.png'
import BlurbWithOutline from "./BlurbWithOutline"

function StressorTable() {
    return (
        <div className="space-y-8 text-center">
            <div className="relative">
                <H1>Lifetime stressors table</H1>
                <BlurbWithOutline className='text-coral [margin-top:68px]'>
                    Life Stress Test assesses 55 different major life stressors known to impact health, wellbeing, and aging. Below is an overview of these stressors, categorized by primary life domain. Knowing which life domain(s) are most impacted can lead to more focused strategies for reducing stress and improving patient resilience.
                </BlurbWithOutline>
                <H2 className="w-1/2 [padding:32px] [top:30px] [left:50%] [transform:translateX(-50%)] bg-white mx-auto absolute">What are lifetime stressors and<br />why are they important to know?</H2>
            </div>
            <div className='space-y-4'>
                <H2>12 Life stressor domains</H2>
                <img className='w-100' src={stressorTable} />
            </div>
        </div>
    )
}

export default StressorTable