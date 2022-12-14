import Blurb from "./Blurb";
import Indicator from "./Indicator";
import { H1 } from "./Typography";
import { slugify } from "./util";

function SocialPsychologicalCharacteristics({ socialPsychoCharacteristics }) {
    return (
        <div className='text-center space-y-2'>
            <H1>5 Social-psychological characteristics</H1>
            <Blurb>Stressors can involve the different social-psychological characteristics shown below. These characteristics refer to the core features of stressors that people can experience. Knowing which characteristics a person has experienced can lead to more specific treatment targets.</Blurb>
            <div className='flex flex-wrap'>
                {Object.keys(socialPsychoCharacteristics).map(x => (
                    <Indicator
                        src={`/images/sociopsych-${slugify(x)}.png`}
                        className='w-1/5'
                        key={x}
                        title={x}
                        value={socialPsychoCharacteristics[x].value}
                    />
                ))}
            </div>
        </div>
    )
}

export default SocialPsychologicalCharacteristics