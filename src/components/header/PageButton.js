import { Link } from "react-router-dom"
import '../../styles/Header/PageButton.css'

export const PageButton = ({pageName}) => {
    return (
        <Link className="PageButton" to={(pageName==='Home')? '/':`${pageName}`}>
            {pageName}
        </Link>
    )
}