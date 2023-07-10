import { CardName } from "./CardName"
import { CardPicture } from "./CardPicture"
import { Price } from "./Price"
import '../../styles/pages/Menu/Card.css'

export const Card = ({picture,name,price}) => {

    return (
        <div className="Card">
            <CardPicture picture={picture}/>
            <CardName picture={picture} name={name} price={price}/>
            <Price price={price}/>
        </div>
    )
}