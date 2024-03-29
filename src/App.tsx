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
import { authenticatedFetcher, urls, variableMapping } from './api';
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

const parseRace = (answer: string) => {
  if (!answer) return null

  switch (answer) {
    case 'A1': {
      return 'Asian'
    }
    case 'A2': {
      return 'Black or African American'
    }
    case 'A3': {
      return 'Native Hawaiian or Other Pacific Islander'
    }
    case 'A4': {
      return 'White'
    }
    case 'A5': {
      return 'Unknown'
    }
    case 'A6': {
      return 'Multiple races'
    }
    case 'A7': {
      return 'Indigenous or First Nation, Aborginal people(s)'
    }
    case 'A9': {
      return 'Prefer not to answer'
    }
  }
}

const parseGender = (answer: string) => {
  if (!answer) return null

  switch (answer) {
    case 'A1': {
      return 'Woman'
    }
    case 'A2': {
      return 'Transgender'
    }
    case 'A3': {
      return 'Gender Fluid'
    }
    case 'A4': {
      return 'Gender Queery'
    }
    case 'A5': {
      return 'Agender'
    }
    case 'A6': {
      return 'Non Binary/Non Conforming'
    }
    case 'A7': {
      return 'Two-Spirited'
    }
    case 'A8': {
      return 'Prefer not to answer'
    }
    case 'A9': {
      return 'Man'
    }
  }
}

const parsePronouns = (answer: string) => {
  if (!answer) return null

  switch (answer) {
    case 'A1': {
      return 'She/Her/Hers'
    }
    case 'A2': {
      return 'He/Him/His'
    }
    case 'A3': {
      return 'Ze/Hir/Hirs'
    }
    case 'A4': {
      return 'They/Them/Theirs'
    }
    case 'A5': {
      return 'No Pronoun'
    }
    case 'A6': {
      return 'No Preference'
    }
    case 'A7': {
      return 'Prefer not to say'
    }
  }
}

function usePatientDetails(userData) {
  const [patientDetails, setPatientDetails] = useState({
    patientName: '',
    patientAge: 0,
    patientRace: '',
    patientGender: '',
    patientPronouns: '',
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
      patientRace: parseRace(userData['X061RACE']) || 'undisclosed',
      patientGender: parseGender(userData['X0071GEN']) || 'undisclosed',
      patientPronouns: parsePronouns(userData['X0072GEN']) || 'undisclosed',
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
  const [publicData, setPublicData] = useState<UserData[]>([])

  const isPuppeteer = useIsPuppeteer()

  const { data, error } = useSWR(
    isPuppeteer &&
    urls.userData(userId), authenticatedFetcher)

  const { data: rawPublicData, error: publicDataError } = useSWR(
    isPuppeteer &&
    urls.publicData, authenticatedFetcher)

  const {
    patientName,
    patientRace,
    patientAge,
    patientGender,
    patientPronouns,
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
          patientPronouns={patientPronouns}
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
        className='page space-y-8'
      >
        <Header
          patientName={patientName}
          testDate={testDate}
        />
        <div className='flex flex-wrap gap-4'>
          <HalfWidthItem className='flex flex-col'>
            <H2 className='uppercase'>Total lifetime stressor count</H2>
            <Blurb className='text-coral'>
              Represents the <span className='underline'>total number</span> of all the acute & chronic stressors experienced over the life course. Higher scores have been related to poorer health and wellbeing, cognitive and behavioral outcomes, aging, and longevity.
            </Blurb>
            <div className='h-full'>
              <GenericBarChart
                maintainAspectRatio={false}
                data={[populationAverageStressors, userTotalStressors]}
                max={totalMaxSumOfStressors}
              />
            </div>
          </HalfWidthItem>
          <HalfWidthItem>
            <H2 className='uppercase'>Total lifetime stressor severity</H2>
            <Blurb className='text-coral'>
              Represents the <span className='underline'>total severity</span> of all the acute & chronic stressors experienced over the life course, calculated based on how stressful or threatening stressors were perceived to be. Sometimes what matters is not what stressors a person faced but how stressful or threatening they were perceived.
            </Blurb>
            <GenericBarChart
              data={[populationAverageSeverity, userSeverity]}
              max={totalMaxSumSeverity}
            />
          </HalfWidthItem>
          <HalfWidthItem>
            <H2 className='uppercase'>Lifetime acute stressor count</H2>
            <Blurb className='text-coral'>
              Represents the <span className='underline'>total number</span> of all the acute stressors experienced over the life course. Acute stressors include getting laid off or fired, being robbed or attacked, getting divorced, or having a loved one pass away.
            </Blurb>
            <GenericBarChart
              data={[populationAverageAcuteStressors, userAcuteStressors]}
              max={totalMaxSumOfAcuteStressors}
            />
          </HalfWidthItem>
          <HalfWidthItem>
            <H2 className='uppercase'>Lifetime acute stressor severity</H2>
            <Blurb className='text-coral'>
              Represents the <span className='underline'>total severity</span> of all the acute stressors experienced over the life course. Acute stressors include getting laid off or fired, being robbed or attacked, getting divorced, or having a loved one pass away.
            </Blurb>
            <GenericBarChart
              data={[populationAverageAcuteStressorSeverity, userAcuteStressorSeverity]}
              max={totalMaxSumOfAcuteStressorSeverity}
            />
          </HalfWidthItem>
          <HalfWidthItem>
            <H2 className='uppercase'>Lifetime chronic stressor count</H2>
            <Blurb className='text-coral'>
              Represents the <span className='underline'>total number</span> of all the chronic stressors experienced over the life course. Chronic stressors include persistent interpersonal, financial, and housing problems that last at least one month, though many last much longer.
            </Blurb>
            <GenericBarChart
              data={[populationAverageChronicStressors, userChronicStressors]}
              max={totalMaxSumOfChronicStressors}
            />
          </HalfWidthItem>
          <HalfWidthItem>
            <H2 className='uppercase'>Lifetime chronic stressor severity</H2>
            <Blurb className='text-coral'>
              Represents the <span className='underline'>total severity</span> of all the chronic stressors experienced over the life course. Chronic stressors include persistent interpersonal, financial, and housing problems that last at least one month, though many last much longer.
            </Blurb>
            <GenericBarChart
              data={[populationAverageChronicStressorSeverity, userChronicStressorSeverity]}
              max={totalMaxSumOfChronicStressorSeverity}
            />
          </HalfWidthItem>
        </div>
      </div>
      <div
        className='break landscape stressor-table space-y-12'
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
        className='break landscape stressor-timeline space-y-12'
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
