import { H3 } from './Typography'
import logo from './images/lstlogo.png'

function Header({ patientName, testDate }) {
    return (
        <div className='flex items-center justify-between'>
            <img className='w-16' src={logo} />
            <div>
                <H3 className='color-neutral-800'>Patient: {patientName}</H3>
                <H3 className='color-neutral-800'>Test date: {testDate}</H3>
            </div>
        </div>
    )
}

export default Header