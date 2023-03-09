import { v1 } from 'uuid'
import { Line } from "react-chartjs-2"
import { AcuteStressor, ChronicStressor } from "./hooks/useAcuteAndChronicStressors"
import { imgDir, scaleTitleFont, slugify } from "./util"
import { memo, useState } from 'react'

interface LifeStressorTimelineChartProps {
    acuteStressors: { [key: string]: AcuteStressor }
    chronicStressors: { [key: string]: ChronicStressor }
    patientAge: number
}

const getMiddlePoint = ({ start_age = 0, end_age = 0, duration = 0 }: ChronicStressor) => {
    if (start_age) {
        return Math.round(Number((start_age + (duration / 2))))
    }
    if (end_age) {
        return Math.round(Number((end_age - (duration / 2))))
    }

    return 0
}

const mapNameToImage = (name: string) => {
    const image = new Image(32, 32)
    image.src = `${imgDir}/timeline-${slugify(name)}.png`
    return image
}

const roundToEven = (x: number) => ((x % 2) !== 0) ? x + 1 : x

function LifeStressorTimelineChart({
    acuteStressors,
    chronicStressors,
    patientAge,
}: LifeStressorTimelineChartProps) {
    const [hasDrawn, setHasDrawn] = useState(false)
    const labelLabels = ['', 'not at all', 'slightly', 'moderate', 'quite a bit', 'extreme', ''].reverse()
    const labels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    const acuteData = Object
        .entries(acuteStressors)
        .filter(x => x[1]?.age)
        .map(x => ({
            data: [roundToEven(x[1].age), x[1].severity * 2],
            image: mapNameToImage(x[0]),
        }))

    const chronicData = Object
        .entries(chronicStressors)
        .filter(x => getMiddlePoint(x[1]))
        .map(x => ({
            data: [roundToEven(getMiddlePoint(x[1])), x[1].severity * 2],
            image: mapNameToImage(x[0]),
        }))

    const data = [...acuteData.map(x => x.data), ...chronicData.map(x => x.data)]
    const images = [...acuteData.map(x => x.image), ...chronicData.map(x => x.image)]

    return (
        <Line
            plugins={[{
                id: 'afterDatasetDraw',
                afterDatasetsDraw() {
                    setHasDrawn(true)
                }
            }, {
                id: 'beforeDatasetDraw',
                beforeDatasetDraw(chart) {
                    if (hasDrawn) return

                    const { ctx } = chart

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
                maintainAspectRatio: false,
                elements: {
                    point: {
                        pointStyle: images,
                    },
                },
                scales: {
                    y: {
                        title: {
                            display: true,
                            text: 'SEVERITY',
                            font: scaleTitleFont,
                        },
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
                        title: {
                            display: true,
                            text: 'PATIENT AGE',
                            font: scaleTitleFont,
                        },
                        beginAtZero: true,
                        max: patientAge,
                        ticks: {
                            stepSize: 2,
                        },
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

export default memo(LifeStressorTimelineChart)