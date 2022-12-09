import StressorExposureBySocialPyshChart from "./StressorExposureBySocialPsychChart";
import { H1 } from "./Typography";

function StressorExposureBySocialPsychological({ socialPsychoCharacteristics, publicSocialPsychoCharacteristics }) {
    return (
        <div className='text-center'>
            <div className='space-y-4'>
                <H1>Stressor exposure by social-psychological characteristics</H1>
                <StressorExposureBySocialPyshChart
                    socialPsychoCharacteristics={socialPsychoCharacteristics}
                    publicSocialPsychoCharacteristics={publicSocialPsychoCharacteristics}
                />
            </div>
        </div>
    )
}

export default StressorExposureBySocialPsychological