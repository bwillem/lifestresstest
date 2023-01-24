import { Bar } from 'react-chartjs-2'
import colors from './colors'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { dataLabelsFont } from './util';

function PRFChart({ userTotal, populationAverage }) {
    return (
        <Bar
            plugins={[ChartDataLabels]}
            options={{
                scales: {
                    y: {
                        max: 28,
                        ticks: {
                            font: {
                                size: 14,
                            },
                        },
                    },
                },
                maintainAspectRatio: false,
                plugins: {
                    datalabels: {
                        color: 'black',
                        font: dataLabelsFont,
                    },
                }, 
            }}
            data={{
                labels: ['AVERAGE', 'PATIENT'],
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