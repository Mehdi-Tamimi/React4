import '../../styles/Header/Header.css'
import { PageButton } from "./PageButton"
export const Header = () => {
    return (
        <div className="Header">
            <PageButton pageName='Contact'/>
            <PageButton pageName='About'/>
            <PageButton pageName='Menu'/>
            <PageButton pageName='Home'/>
            
            
            
        </div>
    )
}