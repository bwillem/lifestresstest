import { Bar } from 'react-chartjs-2'
import colors from './colors'

function GenericBarChart({ data, maintainAspectRatio = true, max = 0 }) {
    const _max = max || Math.round(Math.max(data[0], data[1]) * 1.6) || 100

    return (
        <Bar
            options={{
                scales: {
                    y: {
                        max: _max,
                        ticks: {
                        },
                    },
                },
                maintainAspectRatio,
            }}
            data={{
                labels: ['Population average', 'Patient'],
                datasets: [{
                    data,
                    label: '',
                    backgroundColor: [colors.coral[300], colors.coral.DEFAULT],
                }]
            }}
        />
    )
}

export default GenericBarChart
