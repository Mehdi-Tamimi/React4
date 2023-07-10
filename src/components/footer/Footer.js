
import '../../styles/Footer/Footer.css'
import { Icon } from './Icon'
import instagram from '../../assets/icons/instagram.svg'
import twitter from '../../assets/icons/twitter.svg'
import facebook from '../../assets/icons/facebook.svg'
import linkedin from '../../assets/icons/linkedin.svg'
export const Footer = () => {
    return (
        <div className='Footer'>
            <div className='IconBar'>
                <Icon Icon={instagram}/>
                <Icon Icon={twitter}/>
                <Icon Icon={facebook}/>
                <Icon Icon={linkedin}/>
            </div>
            <div className='WebSite'>@2021 IndianFoood.com</div>
        </div>
    )
}