import { useState } from 'react';
import './contact.scss';

export default function Contact() {
    const [mail, setMail] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMail(true);
        console.log();
    }
    return (
        <div className="contact" id="contact">
            
            <div className="left">
                <h1>Contact Me:</h1>
                <address>
                <h3>LinkedIn: <a href="https://www.linkedin.com/in/william-paris-jr-692415154/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/william-paris-jr-692415154/</a></h3>
                <h3>GitHub: <a href="https://github.com/BillyBernard" target="_blank" rel="noreferrer">https://github.com/BillyBernard</a></h3>
                <h3>Email: williamparis26@gmail.com</h3>
                </address>
                <img src="/images/Mail.png" alt="Mail"/>
                <h4>Copyright &#169; William Paris</h4>
            </div>
            <div className="right">
                <h2>Send me your thoughts</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Type your email here"/>
                        <textarea placeholder="Type your message here"></textarea>
                        <button type="submit">Send</button>
                        {mail && <span>Thank you for the message!</span>}
                    </form>
            </div>
        </div>
    )
}
