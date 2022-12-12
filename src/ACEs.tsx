import Indicator from './Indicator';
import { Emphasis, H1, H2, P } from './Typography';
import Blurb from './Blurb';
import { slugify } from './util';
import GenericBarChart from './GenericBarChart';
import { ComputedDomains } from './types';

interface ACEsProps {
    patientName: string
    userTotal: number
    populationAverage: number
    ACEs: ComputedDomains,
}
function ACEs({ patientName, userTotal, populationAverage, ACEs }: ACEsProps) {
    const hasACEs = Boolean(Object.entries(ACEs).reduce((prev, curr) => prev + curr[1]?.value, 0))

    console.log('has')
    return (
        <>
            <div className='w-100 text-center'>
                <div className='space-y-2'>
                    <div className='space-y-1'>
                        <H1>10 ACEs</H1>
                        <H2>Adverse childhood experiences</H2>
                    </div>
                    <Blurb>
                        Adverse Childhood Experiences, or ACEs, are major life stressors such as abuse,
                        neglect, and household dysfunction that some people experience before age 18.
                        <Emphasis> {patientName} </Emphasis> experienced <Emphasis>{userTotal} out of 10 </Emphasis>
                        possible ACEs before age 18 vs. the population average of <Emphasis>{populationAverage} out of 10 ACEs.</Emphasis>
                    </Blurb>
                </div>
            </div>
            <div className='flex'>
                {hasACEs ? (
                    <>
                        <div className='w-2/3'>
                            <div className='flex flex-wrap'>
                                {Object.keys(ACEs).map(d => (
                                    <Indicator
                                        key={d}
                                        title={d}
                                        src={`/images/ace-${slugify(d)}.png`}
                                        {...ACEs[d]}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className='w-1/3'>
                            <GenericBarChart
                                max={10}
                                maintainAspectRatio={false}
                                data={[populationAverage, userTotal]}
                            />
                        </div>
                    </>
                ) : (
                    <P>No ACEs found for this patient</P>
                )}
            </div>
        </>
    )
}

export default ACEs