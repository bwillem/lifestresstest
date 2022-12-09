import { Bar } from 'react-chartjs-2'
import colors from './colors'

function ACEChart() {
    return (
        <Bar
            options={{
                scales: {
                    y: {
                        max: 10,
                        ticks: {
                        },
                    },
                },
                maintainAspectRatio: false,
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