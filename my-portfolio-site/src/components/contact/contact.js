import React from 'react';
import './contact.scss';

export default function contact() {
    return (
        <div className="contact" id="contact">
            <div className="left">
                <h1>Find Me</h1>
                <h3>LinkedIn</h3>
                <h3>GitHub</h3>
                <h3>Email</h3>
                <img src="/images/Mail.png" alt="Mail"/>
            </div>
            <div className="right">
                <h2>Contact Me</h2>
                    <form>
                        <input type="text" placeholder="Email"/>
                        <textarea placeholder="message"></textarea>
                        <button type="submit">Send</button>
                    </form>
            </div>
        </div>
    )
}
