import BlurbWithOutline from "./BlurbWithOutline"
import Indicator from "./Indicator"
import PRFChart from "./PRFChart"
import { Emphasis, H1, H2 } from "./Typography"
import { imgDir, slugify } from "./util"

function PositiveResilienceFactors({
  userTotal,
  populationAverage,
  patientName,
  selfPositiveResilienceFactors,
  socialPositiveResilienceFactors,
}) {

  return (
    <>
      <div className='w-100 text-center'>
        <div className='relative'>
          <BlurbWithOutline className='text-teal-dark [margin-top:100px] border-b-0 after:[height:116px!important] before:[height:116px!important]'>
            Resilience factors are personal and interpersonal processes such as
            positive emotions and feeling connected to friends and family, which
            can reduce the negative impact stressors have on health. <Emphasis className="text-teal-dark"> {patientName} </Emphasis>
            has a positive resilience score of <Emphasis className="text-teal-dark"> {userTotal} out of 28</Emphasis> vs.
            the population average of <Emphasis className="text-teal-dark"> {populationAverage} out of 28</Emphasis>.
          </BlurbWithOutline>
          <H1 className='[width:560px] [padding:32px] [top:-50px] [left:50%] [transform:translateX(-50%)] bg-white mx-auto absolute'>Positive resilience factors</H1>
        </div>
      </div>
      <div className='border-black flex items-stretch relative pb-8 pl-8 pr-8 after:[background:white] after:[height:308px] after:[width:1px] after:[right:-1px] after:[top:0] after:absolute after:content-" " before:[background:white] before:[height:308px] before:[width:1px] before:[left:-1px] before:[top:0] before:absolute before:content-" " border-b border-l border-r'>
        <div className="w-2/3 flex flex-col">
          <div className="items-center space-between flex w-full h-1/2">
            <H2 className="[writing-mode:vertical-lr] [text-orientation:upright]">SELF</H2>
            {Object.keys(selfPositiveResilienceFactors).map(d => (
              <Indicator
                key={d}
                className='w-1/5'
                src={`${imgDir}/res-${slugify(d)}.png`}
                {...selfPositiveResilienceFactors[d]} />
            ))}
          </div>
          <div className="items-center space-between flex mt-8 w-full h-1/2">
            <H2 className="[writing-mode:vertical-lr] [text-orientation:upright]">SOCIAL</H2>
            {Object.keys(socialPositiveResilienceFactors).map(d => (
              <Indicator
                key={d}
                className='w-1/5'
                src={`${imgDir}/res-${slugify(d)}.png`}
                {...socialPositiveResilienceFactors[d]} />
            ))}
          </div>
        </div>
        <div className='w-1/3 pl-8'>
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
