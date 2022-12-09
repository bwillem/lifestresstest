import { Bar } from 'react-chartjs-2'
import colors from './colors'

function PRFChart({ userTotal, populationAverage }) {
    return (
        <Bar
            options={{
                scales: {
                    y: {
                        max: 28,
                        ticks: {
                        },
                    },
                },
                maintainAspectRatio: false,
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