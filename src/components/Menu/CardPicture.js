
import '../../styles/pages/Menu/CardPicture.css'
export const CardPicture = ({picture}) => {

    return (
        <div className='PictureHolder'>
            <img className='CardPicture' src={picture} alt="food"/>
        </div>
    )
}