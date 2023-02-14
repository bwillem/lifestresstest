import BlurbWithOutline from "./BlurbWithOutline";
import Indicator from "./Indicator";
import { H1 } from "./Typography";
import { imgDir, slugify } from "./util";

function SocialPsychologicalCharacteristics({ socialPsychoCharacteristics }) {
    return (
        <>
            <div className='text-center relative'>
                <BlurbWithOutline className='[margin-top:100px] text-coral border-b-0 before:[height:109px!important] after:[height:109px!important]'>
                    Stressors can involve the different social-psychological characteristics shown below. These characteristics refer to the core features of stressors that people can experience. Knowing which characteristics a person has experienced can lead to more specific treatment targets.
                </BlurbWithOutline>
                <H1 className='[width:786px] [padding:32px] [top:-52px] [left:50%] [transform:translateX(-50%)] bg-white mx-auto absolute'>5 Social-psychological characteristics</H1>
            </div>
            <div className='border-black flex flex-wrap items-center justify-center relative pb-8 after:[background:white] after:[height:98px] after:[width:1px] after:[right:-1px] after:[top:0] after:absolute after:content-" " before:[background:white] before:[height:98px] before:[width:1px] before:[left:-1px] before:[top:0] before:absolute before:content-" " border-b border-l border-r'>
                {Object.keys(socialPsychoCharacteristics).map(x => (
                    <Indicator
                        src={`${imgDir}/sociopsych-${slugify(x)}.png`}
                        className='w-1/5'
                        key={x}
                        title={x}
                        total={socialPsychoCharacteristics[x].total}
                        value={socialPsychoCharacteristics[x].value}
                    />
                ))}
            </div>
        </>
    )
}

export default SocialPsychologicalCharacteristics