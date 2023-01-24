import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
} from 'chart.js'
import { useEffect, useRef, useState } from 'react';
import ACEs from './ACEs';
import PositiveResilienceFactors from './PositiveResilienceFactors';
import Header from './Header';
import LifeStressorDomains from './LifeStressorDomains'
import SocialPsychologicalCharacteristics from './SocialPsychologicalCharacteristics';
import AcuteAndChronicStressorTimeline from './AcuteAndChronicStressorTimeline';
import StressorExposureBySocialPsychological from './StressorExposureBySocialPsychological';
import useSWR from 'swr';
import qs from 'query-string'
import { fetcher, urls, variableMapping } from './api';
import StressorExposure from './StressorExposure';
import { H2, P } from './Typography';
import useStressorDomains from './hooks/useStressorDomains';
import useSocialPsychoCharacteristics from './hooks/useSocialPsychoCharacteristics';
import usePositiveResilienceFactors from './hooks/usePositiveResilienceFactors';
import useAccuteAndChronicStressors from './hooks/useAcuteAndChronicStressors';
import GenericBarChart from './GenericBarChart';
import StressorTable from './StressorTable';
import LifeStressorTimeline from './LifeStressorTimeline';
import useACEs from './hooks/useACEs';
import { capitalize } from './util';
import { UserData } from './types';
import Blurb from './Blurb';
import HalfWidthItem from './HalfWidthItem';
import useIsPuppeteer from './hooks/useIsPuppeteer';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
)

function App() {
  const [patientName, setPatientName] = useState('')
  const [testDate, setTestDate] = useState('')
  const [userId, setUserId] = useState('')
  const [userData, setUserData] = useState<UserData>({})
  const [publicData, setPublicData] = useState([])
  const [timelineIsReady, setTimelineIsReady] = useState(false)

  const isPuppeteer = useIsPuppeteer()

  const { data, error } = useSWR(isPuppeteer && urls.userData(userId), fetcher)
  const { data: rawPublicData, error: publicDataError } = useSWR(isPuppeteer && urls.publicData, fetcher)

  const {
    userSeverity,
    userTotalStressors,
    userChronicStressors,
    userAcuteStressors,
    userChronicStressorSeverity,
    userAcuteStressorSeverity,
    populationAverageSeverity,
    populationAverageStressors,
    populationAverageChronicStressors,
    populationAverageChronicStressorSeverity,
    populationAverageAcuteStressors,
    populationAverageAcuteStressorSeverity,
    stressorDomains,
    publicStressorDomains,
    totalMaxSumSeverity,
    totalMaxSumOfStressors,
    totalMaxSumOfChronicStressors,
    totalMaxSumOfChronicStressorSeverity,
    totalMaxSumOfAcuteStressors,
    totalMaxSumOfAcuteStressorSeverity,
  } = useStressorDomains(userData, publicData)

  const {
    socialPsychoCharacteristics,
    publicSocialPsychoCharacteristics,
  } = useSocialPsychoCharacteristics(userData, publicData)

  const {
    userTotal,
    populationAverage,
    selfPositiveResilienceFactors,
    socialPositiveResilienceFactors,
  } = usePositiveResilienceFactors(userData, publicData)

  const {
    acuteStressors,
    chronicStressors,
  } = useAccuteAndChronicStressors(userData)

  const {
    aceData,
    userTotalACEs,
    populationAverageACEs,
  } = useACEs(userData, publicData)

  const patientAge = parseInt(userData['X006AGE'] || '0')

  const ref0 = useRef<HTMLDivElement>(null)
  const ref1 = useRef<HTMLDivElement>(null)
  const ref2 = useRef<HTMLDivElement>(null)
  const ref3 = useRef<HTMLDivElement>(null)
  const ref4 = useRef<HTMLDivElement>(null)
  const ref5 = useRef<HTMLDivElement>(null)
  const ref6 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!data) return

    setPatientName(capitalize(data['691287X138X4768']) || 'Name missing')
    setTestDate(data['submitdate']?.split(' ')?.[0] || 'Date missing')

    const x = Object.keys(variableMapping).reduce((prev, curr) => ({
      ...prev,
      [variableMapping[curr]]: data[curr],
    }), {})

    setUserData(x)
  }, [data])

  useEffect(() => {
    if (!rawPublicData) return

    const x = rawPublicData.map(x =>
      Object.keys(variableMapping).reduce((prev, curr) => ({
        ...prev,
        [variableMapping[curr]]: x[curr],
      }), {})
    )

    // console.log(
    //   'population data from their totcnt',
    //   x.reduce((prev, curr) => {
    //     return parseInt(curr['TotCnt']) + prev
    //   }, 0) / x.length,
    // )

    setPublicData(x)
  }, [rawPublicData])

  // console.log('my computed pop', populationAverageStressors)
  // console.log('my computed user', userTotalStressors)
  // console.log('populationdata', publicData)

  useEffect(() => {
    if (!window.location?.search) return
    const params = qs.parse(window.location.search)
    const userId = params['dd'] as string
    setUserId(userId)
  }, [window?.location?.search])

  useEffect(() => {
    const isReady = ref0.current &&
      ref1.current &&
      ref2.current &&
      ref3.current &&
      ref4.current &&
      ref5.current &&
      ref6.current &&
      timelineIsReady &&
      totalMaxSumOfAcuteStressorSeverity &&
      Object.keys(publicStressorDomains).length &&
      Boolean(populationAverage)

    if (!isReady) return

  }, [
    Object.keys(publicStressorDomains).length,
    populationAverage,
    totalMaxSumOfAcuteStressorSeverity,
    timelineIsReady,
  ])

  if (!publicData || !data) {
    return (
      <div
        className='page space-y-10'
      >
        <P>Loading...</P>
      </div>
    )
  }

  return (
    <>
      <div
        ref={ref0}
        className='page space-y-12'
      >
        <Header
          patientName={patientName}
          testDate={testDate}
        />
        <StressorTable />
      </div>
      <div
        ref={ref1}
        className='page space-y-12'
      >
        <Header
          patientName={patientName}
          testDate={testDate}
        />
        <LifeStressorTimeline
          patientAge={patientAge}
          patientName={patientName}
          acuteStressors={acuteStressors}
          chronicStressors={chronicStressors}
          setTimelineIsReady={setTimelineIsReady}
        />
      </div>
      <div
        ref={ref2}
        className='page space-y-12'
      >
        <Header
          patientName={patientName}
          testDate={testDate}
        />
        <ACEs
          ACEs={aceData}
          patientName={patientName}
          userTotal={userTotalACEs}
          populationAverage={populationAverageACEs}
        />
        <PositiveResilienceFactors
          userTotal={userTotal}
          populationAverage={populationAverage}
          patientName={patientName}
          selfPositiveResilienceFactors={selfPositiveResilienceFactors}
          socialPositiveResilienceFactors={socialPositiveResilienceFactors}
        />
      </div>
      <div
        ref={ref3}
        className='page space-y-12'
      >
        <Header
          patientName={patientName}
          testDate={testDate}
        />
        <LifeStressorDomains
          stressorDomains={stressorDomains}
        />
        <StressorExposure
          stressorDomains={stressorDomains}
          publicStressorDomains={publicStressorDomains}
        />
      </div>
      <div
        ref={ref4}
        className='page space-y-12'
      >
        <Header
          patientName={patientName}
          testDate={testDate}
        />
        <SocialPsychologicalCharacteristics
          socialPsychoCharacteristics={socialPsychoCharacteristics}
        />
        <StressorExposureBySocialPsychological
          socialPsychoCharacteristics={socialPsychoCharacteristics}
          publicSocialPsychoCharacteristics={publicSocialPsychoCharacteristics}
        />
      </div>
      <div
        ref={ref5}
        className='page space-y-12'
      >
        <Header
          patientName={patientName}
          testDate={testDate}
        />
        <AcuteAndChronicStressorTimeline
          patientAge={patientAge}
          patientName={patientName}
          acuteStressors={acuteStressors}
          chronicStressors={chronicStressors}
        />
      </div>
      <div
        ref={ref6}
        className='page space-y-12'
      >
        <Header
          patientName={patientName}
          testDate={testDate}
        />
        <div className='flex flex-wrap gap-4'>
          <HalfWidthItem>
            <H2>Total lifetime stressor count</H2>
            <Blurb className='text-coral'>
              Represents the total number of all the acute & chronic stressors experienced over the life course. Higher scores have been related to poorer health and wellbeing, cognitive and behavioral outcomes, aging, and longevity.
            </Blurb>
            <GenericBarChart
              data={[populationAverageStressors, userTotalStressors]}
              max={totalMaxSumOfStressors}
            />
          </HalfWidthItem>
          <HalfWidthItem>
            <H2>Total lifetime stressor severity</H2>
            <Blurb className='text-coral'>
              Represents the total severity of all the acute & chronic stressors experienced over the life course, calculated based on how stressful or threatening stressors were perceived to be. Sometimes what matters is not what stressors a person faced but how stressful or threatening they were perceived.
            </Blurb>
            <GenericBarChart
              data={[populationAverageSeverity, userSeverity]}
              max={totalMaxSumSeverity}
            />
          </HalfWidthItem>
          <HalfWidthItem>
            <H2>Lifetime chronic stressor count</H2>
            <Blurb className='text-coral'>
              Represents the total number of all the chronic stressors experienced over the life course. Chronic stressors include persistent interpersonal, financial, and housing problems that last at least one month, though many last much longer.
            </Blurb>
            <GenericBarChart
              data={[populationAverageChronicStressors, userChronicStressors]}
              max={totalMaxSumOfChronicStressors}
            />
          </HalfWidthItem>
          <HalfWidthItem>
            <H2>Lifetime chronic stressor severity</H2>
            <Blurb className='text-coral'>
              Represents the total severity of all the chronic stressors experienced over the life course. Chronic stressors include persistent interpersonal, financial, and housing problems that last at least one month, though many last much longer.
            </Blurb>
            <GenericBarChart
              data={[populationAverageChronicStressorSeverity, userChronicStressorSeverity]}
              max={totalMaxSumOfChronicStressorSeverity}
            />
          </HalfWidthItem>
          <HalfWidthItem>
            <H2>Lifetime acute stressor count</H2>
            <Blurb className='text-coral'>
              Represents the total number of all the acute stressors experienced over the life course. Acute stressors include getting laid off or fired, being robbed or attacked, getting divorced, or having a loved one pass away.
            </Blurb>
            <GenericBarChart
              data={[populationAverageAcuteStressors, userAcuteStressors]}
              max={totalMaxSumOfAcuteStressors}
            />
          </HalfWidthItem>
          <HalfWidthItem>
            <H2>Lifetime acute stressor severity</H2>
            <Blurb className='text-coral'>
              Represents the total severity of all the acute stressors experienced over the life course. Acute stressors include getting laid off or fired, being robbed or attacked, getting divorced, or having a loved one pass away.
            </Blurb>
            <GenericBarChart
              data={[populationAverageAcuteStressorSeverity, userAcuteStressorSeverity]}
              max={totalMaxSumOfAcuteStressorSeverity}
            />
          </HalfWidthItem>
        </div>
      </div>
    </>
  )
}

export default App
