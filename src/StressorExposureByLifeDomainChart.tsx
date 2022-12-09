import { Line } from 'react-chartjs-2'
import colors from './colors'
import { P } from './Typography'

function StressorExposureByLifeDomainChart({ stressorDomains, publicStressorDomains }) {
    return (
        <div>
            <div className='flex items-center justify-center w-100 space-x-4'>
                <div className='space-x-1 flex items-center'><div className='w-4 h-4 bg-coral-600 rounded-full'></div> <P>Patient</P></div>
                <div className='space-x-1 flex items-center'><div className='w-4 h-4 bg-coral-100 rounded-full'></div> <P>Population</P></div>
            </div>
            <Line
                options={{
                }}
                data={{
                    labels: Object.keys(stressorDomains).map(x => x),
                    datasets: [{
                        data: Object.keys(stressorDomains).map(x => stressorDomains[x].value),
                        label: 'Patient',
                        backgroundColor: colors.coral.DEFAULT,
                        borderColor: colors.coral.DEFAULT,
                    }, {
                        data: Object.keys(publicStressorDomains).map(x => publicStressorDomains[x].value),
                        label: 'Population',
                        backgroundColor: colors.coral[100],
                        borderColor: colors.coral[100],
                    }]
                }}
            />
        </div>
    )
}

export default StressorExposureByLifeDomainChart