import Indicator from './Indicator';
import { Emphasis, H1, P } from './Typography';
import { capitalize, imgDir, slugify } from './util';
import { ComputedDomains } from './types';
import BlurbWithOutline from './BlurbWithOutline';
import ACEChart from './ACEChart';

interface ACEsProps {
    patientName: string
    userTotal: number
    populationAverage: number
    ACEs: ComputedDomains,
}

const classes = [
    `border-b border-r w-[90px] h-[133px]`,
    `border-b border-r w-[114px] h-[133px]`,
    `border-b border-r w-[90px] h-[133px]`,
    `border-b border-r w-1/5 h-[133px]`,
    `border-b w-[144px] h-[133px]`,
    `border-r w-[90px] h-[133px] pt-2`,
    `border-r w-[114px] h-[133px] pt-2`,
    `border-r w-[90px] h-[133px] pt-2`,
    `border-r w-1/5 h-[133px] pt-2`,
    `w-[144px] h-[133px] pt-2`,
]

const Lowercase = p => <span className='lowercase' {...p}/>

function ACEs({ patientName, userTotal, populationAverage, ACEs }: ACEsProps) {
    return (
        <div>
            <div className='w-100 text-center'>
                <div className='relative'>
                    <BlurbWithOutline className='text-coral [margin-top:100px] border-b-0 after:[height:136px!important] before:[height:136px!important]'>
                        Adverse Childhood Experiences, or ACEs, are major life stressors such as abuse,
                        neglect, and household dysfunction that some people experience before age 18.
                        {` `}<Emphasis>{patientName}</Emphasis> experienced <Emphasis>{userTotal} out of 10</Emphasis>{` `}
                        possible ACEs before age 18 vs. the population average of <Emphasis>{populationAverage} out of 10 ACEs.</Emphasis>
                    </BlurbWithOutline>
                    <H1 className='w-1/3 [padding:32px] [top:-52px] [left:50%] [transform:translateX(-50%)] bg-white mx-auto absolute'>10 ACE<Lowercase>s</Lowercase></H1>
                </div>
            </div>
            <div className='border-black flex items-stretch relative pb-8 pl-8 pr-8 after:[background:white] after:[height:260px] after:[width:3px] after:[right:-2px] after:[top:0] after:absolute after:content-" " before:[background:white] before:[height:260px] before:[width:3px] before:[left:-2px] before:[top:0] before:absolute before:content-" " border-b border-l border-r'>
                <div className='w-2/3'>
                    <div className='flex flex-wrap items-start'>
                        {Object.keys(ACEs).map((x, i) => (
                            <Indicator
                                className={`border-black ${classes[i]}`}
                                key={x}
                                src={`${imgDir}/ace-${slugify(x)}.png`}
                                title={i === 9 ? x : x.split(' ').join('<br/>')}
                                value={ACEs[x].value}
                                total={ACEs[x].total}
                            />
                        ))}
                    </div>
                </div>
                <div className='w-1/3 pl-8'>
                    <ACEChart
                        data={[populationAverage, userTotal]}
                    />
                </div>
            </div>
        </div>
    )
}

export default ACEs