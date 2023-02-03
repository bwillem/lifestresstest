import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
} from 'chart.js'
import { useEffect, useState } from 'react';
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
import { UserData } from './types';
import Blurb from './Blurb';
import HalfWidthItem from './HalfWidthItem';
import useIsPuppeteer from './hooks/useIsPuppeteer';
import PatientSummary from './PatientSummary';
import { capitalizeEach } from './util';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
)

function usePatientDetails(userData) {
  const [patientDetails, setPatientDetails] = useState({
    patientName: '',
    patientAge: 0,
    patientRace: '',
    patientGender: '',
    patientUpbringing: '',
    patientRelationshipStatus: '',
    patientMotherIsAlive: '',
    patientFatherIsAlive: '',
    additionalInformation: '',
  })

  useEffect(() => {
    setPatientDetails({
      patientName: capitalizeEach(`${userData['S002SuNm']} ${userData['S003SuNm'] || ''}`),
      patientAge: parseInt(userData['X006AGE'] || '0'),
      patientRace: userData['X061RACE'] || 'undisclosed',
      patientGender: userData['X0071GEN'] || 'undisclosed',
      patientUpbringing: userData['X011CHLD'],
      patientRelationshipStatus: userData['X009RELA'] || 'undisclosed',
      patientMotherIsAlive: userData['E535DL'],
      patientFatherIsAlive: userData['E538DL'],
      additionalInformation: userData['S440StWT'],
    })
  }, [userData])

  return patientDetails
}

function App() {
  const [userId, setUserId] = useState('')
  const [userData, setUserData] = useState<UserData>({})
  const [publicData, setPublicData] = useState([])

  const isPuppeteer = useIsPuppeteer()

  const { data, error } = useSWR(isPuppeteer && urls.userData(userId), fetcher)
  const { data: rawPublicData, error: publicDataError } = useSWR(isPuppeteer && urls.publicData, fetcher)

  const {
    patientName,
    patientRace,
    patientAge,
    patientGender,
    patientUpbringing,
    patientRelationshipStatus,
    patientFatherIsAlive,
    patientMotherIsAlive,
    additionalInformation,
  } = usePatientDetails(userData)

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

  useEffect(() => {
    if (!data) return

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

    setPublicData(x)
  }, [rawPublicData])

  useEffect(() => {
    if (!window.location?.search) return
    const params = qs.parse(window.location.search)
    const userId = params['dd'] as string
    setUserId(userId)
  }, [window?.location?.search])

  if (!publicData || !data) {
    return (
      <div
        className='page portrait space-y-10'
      >
        <P>Loading...</P>
      </div>
    )
  }

  const testDate = data['submitdate']?.split(' ')?.[0] || 'Date missing'

  return (
    <>
      <div
        className='page'
      >
        <Header
          patientName={patientName}
          testDate={testDate}
        />
        <PatientSummary
          userData={userData}
          patientName={patientName}
          patientAge={patientAge}
          patientRace={patientRace}
          patientGender={patientGender}
          patientUpbringing={patientUpbringing}
          patientRelationshipStatus={patientRelationshipStatus}
          patientMotherIsAlive={patientMotherIsAlive}
          patientFatherIsAlive={patientFatherIsAlive}
          additionalInformation={additionalInformation}
        />
      </div>
      <div
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
        className='page space-y-12'
      >
        <Header
          patientName={patientName}
          testDate={testDate}
        />
        <div className='flex flex-wrap gap-4'>
          <HalfWidthItem>
            <H2 className='uppercase'>Total lifetime stressor count</H2>
            <Blurb className='text-coral'>
              Represents the total number of all the acute & chronic stressors experienced over the life course. Higher scores have been related to poorer health and wellbeing, cognitive and behavioral outcomes, aging, and longevity.
            </Blurb>
            <GenericBarChart
              data={[populationAverageStressors, userTotalStressors]}
              max={totalMaxSumOfStressors}
            />
          </HalfWidthItem>
          <HalfWidthItem>
            <H2 className='uppercase'>Total lifetime stressor severity</H2>
            <Blurb className='text-coral'>
              Represents the total severity of all the acute & chronic stressors experienced over the life course, calculated based on how stressful or threatening stressors were perceived to be. Sometimes what matters is not what stressors a person faced but how stressful or threatening they were perceived.
            </Blurb>
            <GenericBarChart
              data={[populationAverageSeverity, userSeverity]}
              max={totalMaxSumSeverity}
            />
          </HalfWidthItem>
          <HalfWidthItem>
            <H2 className='uppercase'>Lifetime chronic stressor count</H2>
            <Blurb className='text-coral'>
              Represents the total number of all the chronic stressors experienced over the life course. Chronic stressors include persistent interpersonal, financial, and housing problems that last at least one month, though many last much longer.
            </Blurb>
            <GenericBarChart
              data={[populationAverageChronicStressors, userChronicStressors]}
              max={totalMaxSumOfChronicStressors}
            />
          </HalfWidthItem>
          <HalfWidthItem>
            <H2 className='uppercase'>Lifetime chronic stressor severity</H2>
            <Blurb className='text-coral'>
              Represents the total severity of all the chronic stressors experienced over the life course. Chronic stressors include persistent interpersonal, financial, and housing problems that last at least one month, though many last much longer.
            </Blurb>
            <GenericBarChart
              data={[populationAverageChronicStressorSeverity, userChronicStressorSeverity]}
              max={totalMaxSumOfChronicStressorSeverity}
            />
          </HalfWidthItem>
          <HalfWidthItem>
            <H2 className='uppercase'>Lifetime acute stressor count</H2>
            <Blurb className='text-coral'>
              Represents the total number of all the acute stressors experienced over the life course. Acute stressors include getting laid off or fired, being robbed or attacked, getting divorced, or having a loved one pass away.
            </Blurb>
            <GenericBarChart
              data={[populationAverageAcuteStressors, userAcuteStressors]}
              max={totalMaxSumOfAcuteStressors}
            />
          </HalfWidthItem>
          <HalfWidthItem>
            <H2 className='uppercase'>Lifetime acute stressor severity</H2>
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
      <div
        className='page landscape stressor-table space-y-12'
      >
        <div className='w-full h-[896px]'>
          <Header
            patientName={patientName}
            testDate={testDate}
          />
          <StressorTable />
        </div>
      </div>
      <div
        className='page landscape stressor-timeline space-y-12'
      >
        <div className='w-full h-[896px]'>
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
      </div>
    </>
  )
}

export default App
