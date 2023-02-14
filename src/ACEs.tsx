import Indicator from './Indicator';
import { Emphasis, H1, P } from './Typography';
import { imgDir, slugify } from './util';
import GenericBarChart from './GenericBarChart';
import { ComputedDomains } from './types';
import BlurbWithOutline from './BlurbWithOutline';

interface ACEsProps {
    patientName: string
    userTotal: number
    populationAverage: number
    ACEs: ComputedDomains,
}
function ACEs({ patientName, userTotal, populationAverage, ACEs }: ACEsProps) {

    // const hasACEs = Boolean(Object
    //     .entries(ACEs)
    //     .reduce((prev, curr) =>
    //         prev + curr[1]?.value, 0))

    return (
        <>
            <div className='w-100 text-center'>
                <div className='relative'>
                    <BlurbWithOutline className='text-coral [margin-top:100px] border-b-0 after:[height:109px!important] before:[height:109px!important]'>
                        Adverse Childhood Experiences, or ACEs, are major life stressors such as abuse,
                        neglect, and household dysfunction that some people experience before age 18.
                        <Emphasis> {patientName} </Emphasis> experienced <Emphasis>{userTotal} out of 10 </Emphasis>
                        possible ACEs before age 18 vs. the population average of <Emphasis>{populationAverage} out of 10 ACEs.</Emphasis>
                    </BlurbWithOutline>
                    <H1 className='w-1/3 [padding:32px] [top:-52px] [left:50%] [transform:translateX(-50%)] bg-white mx-auto absolute'>10 ACEs</H1>
                </div>
            </div>
            <div className='border-black flex items-stretch relative pb-8 pl-8 pr-8 after:[background:white] after:[height:260px] after:[width:1px] after:[right:-1px] after:[top:0] after:absolute after:content-" " before:[background:white] before:[height:260px] before:[width:1px] before:[left:-1px] before:[top:0] before:absolute before:content-" " border-b border-l border-r'>
                <div className='w-2/3'>
                    <div className='flex flex-wrap items-start'>
                        {Object.keys(ACEs).map(d => (
                            <Indicator
                                key={d}
                                title={d}
                                className='w-1/5'
                                src={`${imgDir}/ace-${slugify(d)}.png`}
                                {...ACEs[d]}
                            />
                        ))}
                    </div>
                </div>
                <div className='w-1/3 pl-8'>
                    <GenericBarChart
                        max={10}
                        maintainAspectRatio={false}
                        data={[populationAverage, userTotal]}
                    />
                </div>
            </div>
        </>
    )
}

export default ACEs