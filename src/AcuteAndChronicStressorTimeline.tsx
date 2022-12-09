import { Line } from "react-chartjs-2"
import Blurb from "./Blurb"
import { Emphasis, H1 } from "./Typography"

interface Entity {
    value: string
    total: number,
}

interface AcuteStressorChartInterface {
    acuteStressors: { [key: string]: Entity }
    patientAge: number
}

function AcuteStressorChart({ acuteStressors, patientAge }: AcuteStressorChartInterface) {
    const data = Object.entries(acuteStressors)?.map(x => ({
        x: x[1]?.value,
        y: x[0],
    })) || []

    return (
        <Line
            data={{
                datasets: [{
                    data,
                }],
            }}
        />
    )
}

function ChronicStressorChart() {
    return (
        <p>Chronic stressor chart</p>
    )
}

function AcuteAndChronicStressorTimeline({
    acuteStressors,
    chronicStressors,
    patientName,
    patientAge,
}) {
    return (
        <div className="space-y-4">
            <div className="space-y-2 text-center">
                <H1>Acute & chronic stressor timeline</H1>
                <Blurb>
                    Life Stress Test assesses 55 different major life stressors known
                    to impact health, wellbeing, and aging. Below is a graph showing
                    when <Emphasis>{patientName}</Emphasis> stressors occurred, including
                    acute life events and chronic difficulties.
                </Blurb>
            </div>
            <AcuteStressorChart
                acuteStressors={acuteStressors}
                patientAge={patientAge}
            />
            <ChronicStressorChart />
        </div>
    )
}

export default AcuteAndChronicStressorTimeline