
import { Link } from 'react-router-dom'
import '../../styles/pages/Menu/CardName.css'
export const CardName = ({picture,name,price}) => {

    return (
        <Link to={`/Menu/${name}`} className='CardName'>
            {name}
        </Link>
    )
}