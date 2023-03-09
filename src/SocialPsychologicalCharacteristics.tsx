import BlurbWithOutline from "./BlurbWithOutline";
import Indicator from "./Indicator";
import { H1 } from "./Typography";
import { imgDir, slugify } from "./util";

const classes = [
    'border-r',
    'border-r',
    'border-r',
    'border-r',
    '',
]

function SocialPsychologicalCharacteristics({ socialPsychoCharacteristics }) {
    return (
        <div>
            <div className='text-center relative'>
                <BlurbWithOutline className='[margin-top:100px] text-coral border-b-0 before:[height:136px!important] after:[height:136px!important]'>
                    Stressors can involve the different social-psychological characteristics shown below. These characteristics refer to the core features of stressors that people can experience. Knowing which characteristics a person has experienced can lead to more specific treatment targets.
                </BlurbWithOutline>
                <H1 className='[width:786px] [padding:32px] [top:-52px] [left:50%] [transform:translateX(-50%)] bg-white mx-auto absolute'>5 Social-psychological characteristics</H1>
            </div>
            <div className='border-black flex flex-wrap items-center justify-center relative pb-8 after:[background:white] after:[height:90px] after:[width:3px] after:[right:-2px] after:[top:0] after:absolute after:content-" " before:[background:white] before:[height:90px] before:[width:3px] before:[left:-2px] before:[top:0] before:absolute before:content-" " border-b border-l border-r'>
                {Object.keys(socialPsychoCharacteristics).map((x, i) => (
                    <Indicator
                        src={`${imgDir}/sociopsych-${slugify(x)}.png`}
                        className={`w-1/5 border-black ${classes[i]}`}
                        key={x}
                        title={x}
                        total={socialPsychoCharacteristics[x].total}
                        value={socialPsychoCharacteristics[x].value}
                    />
                ))}
            </div>
        </div>
    )
}

export default SocialPsychologicalCharacteristics