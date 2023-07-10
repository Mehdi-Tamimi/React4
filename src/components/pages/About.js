import { Title } from "./HomeElements/Title"
import '../../styles/pages/About/About.css'
import { LoremIpsum } from 'react-lorem-ipsum';
import AboutUsBG from '../../assets/pictures/AboutUs.jpg'

export const About = () => {

    return(
      <div className="About">

          <img className="AboutUsBG" src={AboutUsBG} alt="About-Us"/>
          <Title text='ABOUT US'/>
          <div className="About__text">
              {LoremIpsum({p: 2})}
          </div>

      </div>
    )
}