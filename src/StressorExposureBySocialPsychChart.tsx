import { Line } from 'react-chartjs-2'
import colors from './colors'
import { P } from './Typography'
import { scaleTitleFont } from './util'

function StressorExposureBySocialPyshChart({ socialPsychoCharacteristics, publicSocialPsychoCharacteristics }) {
    return (
        <div>
            <div className='flex items-center justify-center w-100 space-x-4'>
                <div className='space-x-1 flex items-center'><div className='w-4 h-4 bg-coral-600 rounded-full'></div> <P>Patient Total</P></div>
                <div className='space-x-1 flex items-center'><div className='w-4 h-4 bg-coral-100 rounded-full'></div> <P>Population Average</P></div>
            </div>
            <Line
                options={{
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'SOCIAL-PSYCHOLOGICAL CHARACTERISTIC',
                                font: scaleTitleFont,
                            },
                            ticks: {
                                maxRotation: 20,
                                minRotation: 20,
                                align: 'start',
                            },
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'LIFETIME STRESSOR COUNT',
                                font: scaleTitleFont,
                            },
                        },
                    },
                }}
                data={{
                    labels: Object.keys(socialPsychoCharacteristics).map(x => x),
                    datasets: [{
                        data: Object.keys(socialPsychoCharacteristics).map(x => socialPsychoCharacteristics[x].value),
                        label: 'Patient Total',
                        backgroundColor: colors.coral.DEFAULT,
                        borderColor: colors.coral.DEFAULT,
                    }, {
                        data: Object.keys(publicSocialPsychoCharacteristics).map(x => publicSocialPsychoCharacteristics[x].value),
                        label: 'Population Average',
                        backgroundColor: colors.coral[100],
                        borderColor: colors.coral[100],
                    }]
                }}
            />
        </div>
    )
}

export default StressorExposureBySocialPyshChart