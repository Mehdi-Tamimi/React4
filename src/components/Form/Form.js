import { Input } from "./Input"
import '../../styles/pages/Contact/Form.css'
import { SubmitButton } from "./SubmitButton" 

export const Form = () => {
    return (
        <form className="Form">
            
            <Input title='Full Name'/>
            <Input title='Email'/>
            <div className="TextHolder">
                <div>Message</div>
                <textarea placeholder="Enter a message" rows={6}></textarea>
            </div>
            <SubmitButton text='Send Message'/>
            

        </form>

    )
} 