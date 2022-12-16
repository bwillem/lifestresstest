import { Bar, Line } from "react-chartjs-2"
import { AcuteStressor, ChronicStressor } from "./hooks/useAcuteAndChronicStressors"
import { slugify } from "./util"

interface LifeStressorTimelineChartProps {
    acuteStressors: { [key: string]: AcuteStressor }
    chronicStressors: { [key: string]: ChronicStressor }
    patientAge: number
}

const getMiddlePoint = ({ start_age = 0, end_age = 0, duration = 0 }: ChronicStressor) => {
    if (start_age) {
        return Number((start_age + (duration / 2)).toFixed(1))
    }
    if (end_age) {
        return Number((end_age - (duration / 2)).toFixed(1))
    }

    // console.warn('[getMiddlePoint] no middle point for a chronic stressor')
    return 0
}

const mapSeverityToLabel = (s: number) => {
    switch (s) {
        case 1: {
            return 'not at all'
        }
        case 2: {
            return 'slightly'
        }
        case 3: {
            return 'moderate'
        }
        case 4: {
            return 'quite a bit'
        }
        case 5: {
            return 'extreme'
        }
    }
}

const mapNameToImage = (name: string) => {
    const image = new Image(32, 32)
    image.src = `images/timeline-${slugify(name)}.png`
    return image
}

function LifeStressorTimelineChart({ acuteStressors, chronicStressors, patientAge }: LifeStressorTimelineChartProps) {
    const labelLabels = ['', 'not at all', 'slightly', 'moderate', 'quite a bit', 'extreme', ''].reverse()
    const labels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    const acuteData = Object
        .entries(acuteStressors)
        .filter(x => x[1]?.age)
        .map(x => ({
            data: [x[1].age, x[1].severity * 2],
            // data: [x[1].age, mapSeverityToLabel(x[1].severity)],
            image: mapNameToImage(x[0]),
        }))

    const chronicData = Object
        .entries(chronicStressors)
        .filter(x => getMiddlePoint(x[1]))
        .map(x => ({
            data: [getMiddlePoint(x[1]), x[1].severity * 2],
            // data: [getMiddlePoint(x[1]), mapSeverityToLabel(x[1].severity)],
            image: mapNameToImage(x[0]),
        }))

    const data = [...acuteData.map(x => x.data), ...chronicData.map(x => x.data)]
    const images = [...acuteData.map(x => x.image), ...chronicData.map(x => x.image)]

    // console.log('data', data)

    return (
        <Line
            options={{
                indexAxis: 'y',
                showLine: false,
                elements: {
                    // point: {
                    //     pointStyle: images,
                    // },
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        min: 1,
                        max: 11,
                        ticks: {
                            callback: ctx => {
                                const index = ctx as number / 2
                                return labelLabels[index]
                            },
                        },
                    },
                    x: {
                        beginAtZero: true,
                        max: patientAge,
                    },
                },
            }}
            data={{
                labels,
                datasets: [{
                    data,
                }]
            }}
        />
    )
}

export default LifeStressorTimelineChart