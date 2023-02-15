import { Bar } from 'react-chartjs-2'
import colors from './colors'
import ChartDataLabels from 'chartjs-plugin-datalabels';

function GenericBarChart({ data, maintainAspectRatio = true, max = 0 }) {
    const _max = max || Math.round(Math.max(data[0], data[1]) * 1.6) || 100

    return (
        <Bar
            plugins={[ChartDataLabels]}
            options={{
                scales: {
                    y: {
                        max: _max,
                        ticks: {
                        },
                    },
                },
                maintainAspectRatio,
                plugins: {
                    datalabels: {
                        color: 'black',
                        font: {
                            size: 16,
                        },
                    },
                },
            }}
            data={{
                labels: ['POPULATION AVERAGE', 'PATIENT TOTAL'],
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
