import classNames from "classnames"
import { Bar, Line } from "react-chartjs-2"
import BlurbWithOutline from "./BlurbWithOutline"
import colors from "./colors"
import { AcuteStressor, ChronicStressor } from "./hooks/useAcuteAndChronicStressors"
import { Emphasis, H1 } from "./Typography"
import { scaleTitleFont } from "./util"

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
                        ticks: {
                            display: false,
                        },
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
                        title: {
                            display: true,
                            text: 'PATIENT AGE',
                            font: scaleTitleFont,
                        },
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

const bottomEdge = `after:absolute after:[height:3px] after:[width:97%] after:[left:3%] after:[background:white] after:[bottom:-2px]`
const topEdge = `before:absolute before:[height:3px] before:[width:97%] before:[left:3%] before:[background:white] before:[top:-2px]`
const borders = `border-black border-l border-t border-b`

function ChartContainerWithBracket({ className, ...rest }) {
    const classes = classNames(
        className, `${bottomEdge} ${topEdge} ${borders} w-full relative`)
    return <div className={classes} {...rest} />
}

function AcuteAndChronicStressorTimeline({
    acuteStressors,
    chronicStressors,
    patientName,
    patientAge,
}) {
    return (
        <div className='flex flex-col h-full'>
            <div className='text-center relative'>
                <BlurbWithOutline className='text-coral border-b-0 before:[height:136px!important] after:[height:136px!important]'>
                    Life Stress Test assesses 55 different major life stressors known
                    to impact health, wellbeing, and aging. Below is a graph showing
                    when <Emphasis>{patientName}'s</Emphasis> stressors occurred, including
                    acute life events and chronic difficulties.
                </BlurbWithOutline>
                <H1 className='[width:718px] [padding:32px] [top:-52px] [left:50%] [transform:translateX(-50%)] bg-white mx-auto absolute'>Acute & chronic stressor timeline</H1>
            </div>
            <div className='flex h-full'>
                <h3 className="[writing-mode:vertical-lr] [transform:rotate(180deg)translateY(70px)] text-center">STRESSORS</h3>
                <div className='flex flex-col [height:96%] grow'>
                    <div className='flex [height:43%] [padding-bottom:16px] w-full grow'>
                        <p className="[writing-mode:vertical-lr] [transform:rotate(180deg)] text-center">Acute</p>
                        <ChartContainerWithBracket className='[padding-left:11px]'>
                            <AcuteStressorChart
                                acuteStressors={acuteStressors}
                                patientAge={patientAge}
                            />
                        </ChartContainerWithBracket>
                    </div>
                    <div className='flex h-1/2 w-full grow'>
                        <p className="[writing-mode:vertical-lr] [transform:rotate(180deg)] text-center">Chronic</p>
                        <div className={`${bottomEdge} ${topEdge} ${borders} w-full relative`}>
                            <ChronicStressorChart
                                chronicStressors={chronicStressors}
                                patientAge={patientAge}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AcuteAndChronicStressorTimeline
