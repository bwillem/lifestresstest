import { v1 } from 'uuid'
import { Line } from "react-chartjs-2"
import { AcuteStressor, ChronicStressor } from "./hooks/useAcuteAndChronicStressors"
import { slugify } from "./util"
import colors from './colors'

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
            image: mapNameToImage(x[0]),
        }))

    const chronicData = Object
        .entries(chronicStressors)
        .filter(x => getMiddlePoint(x[1]))
        .map(x => ({
            data: [getMiddlePoint(x[1]), x[1].severity * 2],
            image: mapNameToImage(x[0]),
        }))

    const data = [...acuteData.map(x => x.data), ...chronicData.map(x => x.data)]
    const images = [...acuteData.map(x => x.image), ...chronicData.map(x => x.image)]

    return (
        <Line
            plugins={[{
                id: 'beforeDatasetDraw',
                beforeDatasetDraw(chart, args, opts) {
                    const { ctx, getDatasetMeta } = chart

                    const points = chart.getDatasetMeta(0).data.map(el => ({
                        ...el,
                        id: v1(),
                    }))

                    let adjustedMap: { [key: string]: { x: number, y: number, id: string }[] } = {}
                    const adjusted: string[] = []

                    /**
                     * Loop over the dataset,
                     * keep track of each point,
                     * if a point is overlapping (datasetmeta.element.x && datasetmeta.element.y exist in overlapping ),
                     * put it in a group and
                     * mutate the datasetmeta.element.x
                     */
                    points.forEach(point => {
                        const overlapping = points.find(el =>
                            (el.x === point.x) && (el.y === point.y) && (el.id !== point.id))

                        if (overlapping) {
                            /**
                             * format data into groups
                             */
                            const hasGroup = adjustedMap[`${overlapping.x}${overlapping.y}`]

                            // const adjusted = {
                            //     ...overlapping,
                            //     x: point.x - 24,
                            //     y: point.y - 24,
                            // }

                            if (!hasGroup) {
                                adjustedMap[`${overlapping.x}${overlapping.y}`] = []
                            }

                            adjustedMap[`${overlapping.x}${overlapping.y}`] = [
                                ...adjustedMap[`${overlapping.x}${overlapping.y}`],
                                overlapping,
                            ]
                        }
                    })

                    /**
                     * make adjustments to each point in a group
                     */
                    points.forEach((point, i) => {
                        const existsInAGroup = point => {
                            let group: { x: number, y: number, id: string }[] = []
                            Object.values(adjustedMap)
                                .some(x =>
                                    Boolean(x.find(x =>
                                        x.id === point.id)) ? group = x : null)
                            return group
                        }

                        const g = existsInAGroup(point)

                        if (g.length) {
                            const index = g.findIndex(x => x.id === point.id)
                            const offset = g.length * 10
                            const transformation = (40 * index) - offset
                            const transformedX = chart.getDatasetMeta(0).data[i].x + transformation
                            const transformedY = chart.getDatasetMeta(0).data[i].y - 40

                            chart.getDatasetMeta(0).data[i].y = transformedY
                            chart.getDatasetMeta(0).data[i].x = transformedX

                            ctx.save()

                            ctx.beginPath()
                            ctx.moveTo(point.x, point.y)
                            ctx.lineTo(transformedX, transformedY)
                            ctx.strokeStyle = '#F75656'
                            ctx.stroke()

                            ctx.beginPath()
                            ctx.fillStyle = '#eeeeee'
                            ctx.arc(point.x, point.y, 16, 0, Math.PI * 2)
                            ctx.fill()

                            ctx.font = 'bold 14px sans-serif'
                            ctx.fillStyle = '#F75656'
                            ctx.fillText('2', point.x - 4, point.y + 4)

                            adjusted.push(point.id)
                        }
                    })
                },
            }]}
            options={{
                indexAxis: 'y',
                showLine: false,
                elements: {
                    point: {
                        pointStyle: images,
                    },
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