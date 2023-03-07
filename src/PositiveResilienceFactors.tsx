import BlurbWithOutline from "./BlurbWithOutline"
import Indicator from "./Indicator"
import PRFChart from "./PRFChart"
import { Emphasis, H1, H2 } from "./Typography"
import { imgDir } from "./util"

const borders = [
  `border-b border-r`,
  `border-b border-r`,
  `border-b border-r`,
  `border-b border-r`,
  `border-b`,
  `border-r`,
  `border-r`,
  `border-r`,
  `border-r`,
  ``,
]

const firstRowBorders = [
  'border-r border-l',
  'border-r',
  'border-r',
  'border-r',
  '',
]

const secondRowBorders = [
  'border-r border-l',
  'border-r',
  'border-r',
  'border-r',
  '',
]

const dims = [
  'w-1/5 h-[133px]',
  'w-1/5 h-[133px]',
  'w-1/5 h-[133px]',
  'w-1/5 h-[133px]',
  'w-1/5 h-[133px]',
  'w-1/5 h-[133px]',
]

function PositiveResilienceFactors({
  userTotal,
  populationAverage,
  patientName,
  selfPositiveResilienceFactors,
  socialPositiveResilienceFactors,
}) {

  return (
    <div>
      <div className='w-100 text-center'>
        <div className='relative'>
          <BlurbWithOutline className='text-teal-dark [margin-top:100px] border-b-0 after:[height:136px!important] before:[height:136px!important]'>
            Resilience factors are personal and interpersonal processes such as
            positive emotions and feeling connected to friends and family, which
            can reduce the negative impact stressors have on health. <Emphasis className="text-teal-dark">{patientName}</Emphasis>{` `}
            has a positive resilience score of <Emphasis className="text-teal-dark">{userTotal} out of 28</Emphasis> vs.
            the population average of <Emphasis className="text-teal-dark">{populationAverage} out of 28</Emphasis>.
          </BlurbWithOutline>
          <H1 className='[width:560px] [padding:32px] [top:-50px] [left:50%] [transform:translateX(-50%)] bg-white mx-auto absolute'>Positive resilience factors</H1>
        </div>
      </div>
      <div className='border-black flex items-stretch relative pb-8 pl-8 pr-8 after:[background:white] after:[height:300px] after:[width:3px] after:[right:-2px] after:[top:0] after:absolute after:content-" " before:[background:white] before:[height:300px] before:[width:3px] before:[left:-2px] before:[top:0] before:absolute before:content-" " border-b border-l border-r'>
        <div className="w-2/3 flex flex-col">
          <div className="items-start space-between flex w-full border-b border-black">
            <H2 className="[writing-mode:vertical-lr] [text-orientation:upright] m-auto">SELF</H2>
            {Object.keys(selfPositiveResilienceFactors).map((d, i) => (
              <Indicator
                key={d}
                className={`border-black ${dims[i]} ${firstRowBorders[i]}`}
                title={d}
                value={selfPositiveResilienceFactors[d].value}
                total={selfPositiveResilienceFactors[d].total}
                src={`${imgDir}${selfPositiveResilienceFactors[d].img}`} />
            ))}
          </div>
          <div className="items-start space-between flex w-fullc">
            <H2 className="[writing-mode:vertical-lr] [text-orientation:upright] m-auto">SOCIAL</H2>
            {Object.keys(socialPositiveResilienceFactors).map((d, i) => (
              <Indicator
                key={d}
                className={`pt-2 border-black ${dims[i]} ${secondRowBorders[i]}`}
                title={d}
                value={socialPositiveResilienceFactors[d].value}
                total={socialPositiveResilienceFactors[d].total}
                src={`${imgDir}${socialPositiveResilienceFactors[d].img}`} />
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
    </div>
  )
}

export default PositiveResilienceFactors
