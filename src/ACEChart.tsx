import { Bar } from 'react-chartjs-2'
import colors from './colors'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { dataLabelsFont } from './util';

function ACEChart() {
    return (
        <Bar
            plugins={[ChartDataLabels]}
            options={{
                scales: {
                    y: {
                        max: 10,
                        ticks: {
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
                labels: ['Population average', 'Patient'],
                datasets: [{
                    data: [3, 7],
                    label: '',
                    backgroundColor: [colors.coral[300], colors.coral.DEFAULT],
                }]
            }}
        />
    )
}

export default ACEChart