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
                <h3>LinkedIn</h3>
                <h3>GitHub</h3>
                <h3>Email</h3>
                <img src="/images/Mail.png" alt="Mail"/>
            </div>
            <div className="right">
                <h2>Send me your thoughts on the site</h2>
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
