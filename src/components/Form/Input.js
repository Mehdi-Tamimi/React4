import '../../styles/pages/Contact/Input.css'

export const Input = ({title}) => {

    return (
        <div className='Input__holder'>
            <div>{title}</div>
            <input className='Input' placeholder={`Enter ${title}...`}/>
        </div>
    )
}