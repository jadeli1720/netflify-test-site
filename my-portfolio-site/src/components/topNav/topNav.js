import React from 'react';
import './topNav.scss';

export default function topNav({ burgerOpen, setBurgerOpen }) {
    return (
        <div className={'topNav ' + (burgerOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo"><img src="/images/logoTest.png" alt="William Paris Logo"/></a>
                    <div className="title">
                        <h2>William Paris</h2>
                        <h3>Full Stack Developer</h3>
                    </div>
                </div>

                <h2>React | JavaScript | HTML | CSS | Redux | Git | Node | SQL | Adobe Creative Suite</h2>

                <div className="right">
                    <div className="hamburger" onClick={()=>setBurgerOpen(!burgerOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>

            </div>
            
        </div>
    )
}
