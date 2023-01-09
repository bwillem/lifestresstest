import { Bar } from 'react-chartjs-2'
import colors from './colors'
import ChartDataLabels from 'chartjs-plugin-datalabels';

function PRFChart({ userTotal, populationAverage }) {
    return (
        <Bar
            plugins={[ChartDataLabels]}
            options={{
                scales: {
                    y: {
                        max: 28,
                        ticks: {
                        },
                    },
                },
                maintainAspectRatio: false,
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
                labels: ['Population average', 'Patient'],
                datasets: [{
                    data: [populationAverage, userTotal],
                    label: '',
                    backgroundColor: [colors.teal.light, colors.teal.dark],
                }]
            }}
        />
    )
}

export default PRFChart