import StressorExposureByLifeDomainChart from "./StressorExposureByLifeDomainChart";
import { H1 } from "./Typography";

function StressorExposure({ stressorDomains, publicStressorDomains }) {
    return (
        <div className='text-center'>
            <div className='space-y-4'>
                <H1>Stressor exposure by life domain</H1>
                <StressorExposureByLifeDomainChart
                    stressorDomains={stressorDomains}
                    publicStressorDomains={publicStressorDomains}
                />
            </div>
        </div>
    )
}

export default StressorExposure