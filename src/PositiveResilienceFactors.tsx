import Blurb from "./Blurb"
import Indicator from "./Indicator"
import PRFChart from "./PRFChart"
import { Emphasis, H1, H2 } from "./Typography"
import { slugify } from "./util"

function PositiveResilienceFactors({
  userTotal,
  populationAverage,
  patientName,
  positiveResilienceFactors,
}) {

  return (
    <>
      <div className='w-100 text-center'>
        <div className='space-y-2'>
          <div className='space-y-1'>
            <H1>6 Positive resilience factors</H1>
            <H2>Adverse childhood experiences</H2>
          </div>
          <Blurb className='text-teal-dark'>
            Resilience factors are personal and interpersonal processes such as
            positive emotions and feeling connected to friends and family, which
            can reduce the negative impact stressors have on health. <Emphasis className="text-teal-dark"> {patientName} </Emphasis>
            has a positive resilience score of <Emphasis className="text-teal-dark"> {userTotal} out of 28</Emphasis> vs.
            the population average of <Emphasis className="text-teal-dark"> {populationAverage} out of 28</Emphasis>.
          </Blurb>
        </div>
      </div>
      <div className='flex'>
        <div className='w-2/3'>
          <div className='flex flex-wrap'>
            {Object.keys(positiveResilienceFactors).map(d => (
              <Indicator
                src={`/images/res-${slugify(d)}.png`}
                key={d}
                {...positiveResilienceFactors[d]} />
            ))}
          </div>
        </div>
        <div className='w-1/3'>
          <PRFChart
            userTotal={userTotal}
            populationAverage={populationAverage}
          />
        </div>
      </div>
    </>
  )
}

export default PositiveResilienceFactors
