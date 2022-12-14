import { Bar, Line } from "react-chartjs-2"
import Blurb from "./Blurb"
import colors from "./colors"
import { Emphasis, H1 } from "./Typography"

// interface AcuteStressor {
//     value: string
//     total: number,
// }

interface ChronicStressor {
    end_age?: number,
    start_age?: number,
    duration: number,
}

interface AcuteStressorChartInterface {
    acuteStressors: { [key: string]: number }
    patientAge: number
}

interface ChronicStressorChartInterface {
    chronicStressors: { [key: string]: ChronicStressor }
    patientAge: number
}

function AcuteStressorChart({ acuteStressors, patientAge }: AcuteStressorChartInterface) {
    const data = Object
        .entries(acuteStressors)
        ?.map(x => x[1] || null) || []

    const labels = Object
        .entries(acuteStressors)
        ?.map(x => x[0]) || []

    const severity = Object
        .entries(acuteStressors)
        ?.map(x => x[0]) || []

    // console.log('data', data)
    // console.log('acuteStressors', acuteStressors)

    return (
        <Line
            options={{
                maintainAspectRatio: false,
                indexAxis: 'y',
                scales: {
                    x: {
                        beginAtZero: true,
                        max: patientAge,
                    },
                },
            }}
            data={{
                labels,
                datasets: [
                    {
                        data,
                        showLine: false,
                        pointBackgroundColor: context => {
                            const i = context.dataIndex
                            console.log('point: ', context.dataset.data[i])
                            return colors.coral[600]
                        },
                        pointBorderColor: colors.coral[600],
                        pointBorderWidth: 6,
                    }
                ],
            }}
        />
    )
}

function ChronicStressorChart({ chronicStressors, patientAge }: ChronicStressorChartInterface) {
    const line = ({ end_age, start_age, duration }: ChronicStressor) => {
        if (!duration) return null
        if (!end_age && !start_age) return null
        const start = start_age || ((end_age || 0) - duration)
        const end = end_age
        return [start, end]
    }

    const data = Object
        .entries(chronicStressors)
        ?.map(x => line(x[1])) || []

    const labels = Object
        .entries(chronicStressors)
        ?.map(x => x[0]) || []

    console.log('data', data)
    console.log('labels', labels)

    // console.log('chronicStressors', data)

    return (
        <Bar
            options={{
                maintainAspectRatio: false,
                indexAxis: 'y',
                scales: {
                    x: {
                        beginAtZero: true,
                        max: patientAge,
                    },
                },
            }}
            data={{
                labels,
                datasets: [
                    {
                        data,
                        backgroundColor: colors.coral[600],
                        barThickness: 8,
                        // showLine: false,
                    }
                ],
            }}
        />
    )
}

function AcuteAndChronicStressorTimeline({
    acuteStressors,
    chronicStressors,
    patientName,
    patientAge,
}) {
    return (
        <div className='space-y-8 flex flex-col h-full'>
            <div className="space-y-4 text-center">
                <H1>Acute & chronic stressor timeline</H1>
                <Blurb>
                    Life Stress Test assesses 55 different major life stressors known
                    to impact health, wellbeing, and aging. Below is a graph showing
                    when <Emphasis>{patientName}</Emphasis> stressors occurred, including
                    acute life events and chronic difficulties.
                </Blurb>
            </div>
            <div className='h-full'>
                <div className='h-1/2'>
                    <AcuteStressorChart
                        acuteStressors={acuteStressors}
                        patientAge={patientAge}
                    />
                </div>
                <div className='h-1/2'>
                    <ChronicStressorChart
                        chronicStressors={chronicStressors}
                        patientAge={patientAge}
                    />
                </div>
            </div>
        </div>
    )
}

export default AcuteAndChronicStressorTimeline