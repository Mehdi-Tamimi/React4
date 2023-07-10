
import '../../../styles/pages/Home/HomePageBG.css'
import { OrderButton } from './OrderButton'
import { SubTitle } from './SubTitle'
import { Title } from './Title'
export const HomePageBG = () => {

    return (
        <div className='HomePageBG'>
            <Title text='Food Corner'/>
            <SubTitle text='INDIAN FOOD AT A CLICK'/>
            <OrderButton text='ORDER NOW'/>
        </div>
    )
}