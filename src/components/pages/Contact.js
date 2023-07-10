import '../../styles/pages/Contact/Contact.css'
import ContactUsBG from '../../assets/pictures/ContactUs.jpg'
import { Form } from '../Form/Form'
import { Title } from './HomeElements/Title'
export const Contact = () => {

    return(
      <div className='Contact'>
          <img className='ContactUsBG' src={ContactUsBG} alt='Contact-Us'/> 
          <div className='Contact__Form'>
              <Title text='Contact Us'/>
              <Form/>
          </div>  
     
      </div>
    )
}