import { Bar, Line } from "react-chartjs-2"
import Blurb from "./Blurb"
import colors from "./colors"
import { AcuteStressor, ChronicStressor } from "./hooks/useAcuteAndChronicStressors"
import { Emphasis, H1 } from "./Typography"

interface AcuteStressorsChartProps {
    acuteStressors: { [key: string]: AcuteStressor }
    patientAge: number
}

interface ChronicStressorsChartProps {
    chronicStressors: { [key: string]: ChronicStressor }
    patientAge: number
}

const mapSeverityToColor = (severity: number) => {
    switch (severity) {
        case 0: {
            return 'transparent'
        }
        case 1: {
            return colors.coral[200]
        }
        case 2: {
            return colors.coral[300]
        }
        default:
        case 3: {
            return colors.coral[500]
        }
        case 4: {
            return colors.coral[600]
        }
        case 5: {
            return colors.coral[800]
        }
    }
}

const reverseScale = (value: number) => {
    switch (value) {
        case 0: {
            return 7
        }
        case 1: {
            return 6
        }
        case 2: {
            return 6
        }
        default:
        case 3: {
            return 4
        }
        case 4: {
            return 2
        }
        case 5: {
            return 0
        }
    }
}

function AcuteStressorChart({ acuteStressors, patientAge }: AcuteStressorsChartProps) {
    const data = Object
        .entries(acuteStressors)
        ?.map(x => x[1].age || null) || []

    const labels = Object
        .entries(acuteStressors)
        ?.map(x => x[0]) || []

    const severity = Object
        .entries(acuteStressors)
        ?.map(x => x[1].severity) || []

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
                    y: {
                        ticks: {
                            autoSkip: false,
                        },
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
                            return mapSeverityToColor(severity[i])
                        },
                        pointRadius: context => {
                            return severity[context.dataIndex] * 1.333
                        },
                    }
                ],
            }}
        />
    )
}

function ChronicStressorChart({ chronicStressors, patientAge }: ChronicStressorsChartProps) {
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

    const severity = Object
        .entries(chronicStressors)
        ?.map(x => x[1].severity) || []

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
                    y: {
                        ticks: {
                            autoSkip: false,
                        },
                    },
                },
            }}
            data={{
                labels,
                datasets: [
                    {
                        data,
                        backgroundColor: context => {
                            return mapSeverityToColor(severity[context.dataIndex])
                        },
                        borderColor: () => {
                            return 'white'
                        },
                        borderSkipped: false,
                        borderRadius: {
                            topLeft: 99,
                            topRight: 99,
                            bottomLeft: 99,
                            bottomRight: 99,
                        },
                        borderWidth: context => {
                            return {
                                top: reverseScale(severity[context.dataIndex]),
                                bottom: reverseScale(severity[context.dataIndex]),
                            }
                        },
                        barPercentage: 1,
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