import { Bar } from 'react-chartjs-2'
import colors from './colors'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { dataLabelsFont } from './util';

function ACEChart({ data }) {
    return (
        <Bar
            plugins={[ChartDataLabels]}
            options={{
                scales: {
                    y: {
                        max: 10,
                        ticks: {
                            font: {
                                size: 14,
                            },
                        },
                    },
                    x: {
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
                labels: [['POPULATION', 'AVERAGE'], ['PATIENT', 'TOTAL']],
                datasets: [{
                    data,
                    label: '',
                    backgroundColor: [colors.coral[300], colors.coral.DEFAULT],
                }]
            }}
        />
    )
}

export default ACEChart