import { H1, H2 } from "./Typography"
import stressorTable from './images/stressor-table.png'
import Blurb from "./Blurb"

function StressorTable() {
    return (
        <div className="space-y-6 text-center">
            <div className="space-y-2">
                <H1>Lifetime stressors table</H1>
                <H2>What are lifetime stressors and why are they important to know?</H2>
                <Blurb className='text-coral'>Life Stress Test assesses 55 different major life stressors known to impact health, wellbeing, and aging. Below is an overview of these stressors, categorized by primary life domain. Knowing which life domain(s) are most impacted can lead to more focused strategies for reducing stress and improving patient resilience.</Blurb>
            </div>
            <div className='space-y-4'>
                <H2>12 Life stressor domains</H2>
                <img className='w-100' src={stressorTable} />
            </div>
        </div>
    )
}

export default StressorTable