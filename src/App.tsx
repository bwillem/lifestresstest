import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  // Legend,
} from 'chart.js'
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'
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

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  // Legend,
)

const format = [1024, 1440]
const doc = new jsPDF({ unit: 'px', format })

function App() {
  const [patientName, setPatientName] = useState('')
  const [testDate, setTestDate] = useState('')
  const [userId, setUserId] = useState('')
  const [userData, setUserData] = useState<UserData>({})
  const [publicData, setPublicData] = useState([])

  const { data, error } = useSWR(urls.userData(userId), fetcher)
  const { data: rawPublicData, error: publicDataError } = useSWR(urls.publicData, fetcher)

  const {
    userSeverity,
    userTotalStressors,
    populationAverageSeverity,
    populationAverageStressors,
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
    positiveResilienceFactors,
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

  const pdf = useRef<jsPDF>()

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
      totalMaxSumOfAcuteStressorSeverity &&
      Object.keys(publicStressorDomains).length &&
      Boolean(populationAverage) &&
      !pdf.current

    console.log('IS RERADY', isReady)

    if (!isReady) return

    const toPDF = async () => {
      if (!isReady) return
      pdf.current = doc

      const page0 = await html2canvas(ref0.current)
      const page0img = page0.toDataURL('report/png')
      doc.addImage(page0img, 'PNG', 0, 0, format[0], format[1])

      doc.addPage(format)
      const page1 = await html2canvas(ref1.current)
      const page1img = page1.toDataURL('report/png')
      doc.addImage(page1img, 'PNG', 0, 0, format[0], format[1])

      doc.addPage(format)
      const page2 = await html2canvas(ref2.current)
      const page2img = page2.toDataURL('report/png')
      doc.addImage(page2img, 'PNG', 0, 0, format[0], format[1])

      doc.addPage(format)
      const page3 = await html2canvas(ref3.current)
      const page3img = page3.toDataURL('report/png')
      doc.addImage(page3img, 'PNG', 0, 0, format[0], format[1])

      doc.addPage(format)
      const page4 = await html2canvas(ref4.current)
      const page4img = page4.toDataURL('report/png')
      doc.addImage(page4img, 'PNG', 0, 0, format[0], format[1])

      doc.addPage(format)
      const page5 = await html2canvas(ref5.current)
      const page5img = page5.toDataURL('report/png')
      doc.addImage(page5img, 'PNG', 0, 0, format[0], format[1])

      doc.addPage(format)
      const page6 = await html2canvas(ref6.current)
      const page6img = page6.toDataURL('report/png')
      doc.addImage(page6img, 'PNG', 0, 0, format[0], format[1])

      doc.save('test.pdf')
    }

    toPDF()
  }, [
    // ref0.current,
    // ref1.current,
    // ref2.current,
    // ref3.current,
    // ref4.current,
    // ref5.current,
    // ref6.current,
    Object.keys(publicStressorDomains).length,
    populationAverage,
    totalMaxSumOfAcuteStressorSeverity,
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
          positiveResilienceFactors={positiveResilienceFactors}
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
        <div className='flex flex-wrap space-y-8'>
          <div className='w-1/2 text-center mt-8 pr-4'>
            <H2>Total lifetime stressor count</H2>
            <GenericBarChart
              data={[populationAverageStressors, userTotalStressors]}
              max={totalMaxSumOfStressors}
            />
          </div>
          <div className='w-1/2 text-center pl-4'>
            <H2>Total lifetime stressor severity</H2>
            <GenericBarChart
              data={[populationAverageSeverity, userSeverity]}
              max={totalMaxSumSeverity}
            />
          </div>
          <div className='w-1/2 text-center pr-4'>
            <H2>Lifetime chronic stressor count</H2>
            <GenericBarChart
              data={[populationAverageSeverity, userSeverity]}
              max={totalMaxSumOfChronicStressors}
            />
          </div>
          <div className='w-1/2 text-center pl-4'>
            <H2>Lifetime chronic stressor severity</H2>
            <GenericBarChart
              data={[populationAverageStressors, userTotalStressors]}
              max={totalMaxSumOfChronicStressorSeverity}
            />
          </div>
          <div className='w-1/2 text-center pr-4'>
            <H2>Lifetime acute stressor count</H2>
            <GenericBarChart
              data={[populationAverageStressors, userTotalStressors]}
              max={totalMaxSumOfAcuteStressors}
            />
          </div>
          <div className='w-1/2 text-center pl-4'>
            <H2>Lifetime acute stressor severity</H2>
            <GenericBarChart
              data={[populationAverageStressors, userTotalStressors]}
              max={totalMaxSumOfAcuteStressorSeverity}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
