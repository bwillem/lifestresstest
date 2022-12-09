import { H1, H2, P } from "./Typography"
import stressorTable from './images/stressor-table.png'

function StressorTable() {
    return (
        <div className="space-y-4 text-center">
            <H1>Lifetime stressors table</H1>
            <div className="space-y-2">
                <H2>What are lifetime stressors and why are they important to know?</H2> 
                <P className='text-coral-600'>Life Stress Test assesses 55 different major life stressors known to impact health, wellbeing, and aging. Below is an overview of these stressors, categorized by primary life domain. Knowing which life domain(s) are most impacted can lead to more focused strategies for reducing stress and improving patient resilience.</P>
            </div>
            <H2>12 Life stressor domains</H2> 
            <img className='w-100' src={stressorTable} />
        </div>
    )
}

export default StressorTable