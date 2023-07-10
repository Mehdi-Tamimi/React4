import salmon from '../../assets/pictures/Menu/Salmon.jpg'
import pizza from '../../assets/pictures/Menu/Pizza.jpg'
import pancakes from '../../assets/pictures/Menu/Pancakes.jpg'
import humburger from '../../assets/pictures/Menu/Hamburger.jpg'
import meat from '../../assets/pictures/Menu/Meat.jpg'
import croissant from '../../assets/pictures/Menu/Croissant.jpg'
import { Card } from '../Menu/Card'
import '../../styles/pages/Menu/Menu.css'
import { Title } from '../pages/HomeElements/Title'
export const Menu = () => {
    const foods = [
      {picture: salmon,name: 'Salmon', price: '39$'},
      {picture: pizza,name: 'Pizza', price: '29$'},
      {picture: pancakes,name: 'Pancakes', price: '19$'},
      {picture: humburger,name: 'Humburger', price: '19$'},
      {picture: meat,name: 'Meat', price: '39$'},
      {picture: croissant,name: 'Croissant', price: '19$'}
    ]
    return(
      <div className='Menu'>
        <Title text='Our Menu'/>
        <div className='Items'>
        {
          foods.map((item) => {
            return (
              <Card picture={item.picture} name={item.name} price={item.price}/>
            )
            
          })
        }
                 
      </div>
      </div>
    )
}