import React from 'react';
import './topNav.scss';


export default function topNav() {
    return (
        <div className='topNav'>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo"><img src="/images/logoTest.png" alt="William Paris Logo"/></a>
                </div>
                <div className="right">
                <a href="#intro">About</a>
                    <a href="#codePortfolio">Code</a>
                    <a href="#artPortfolio">Art</a>
                    <a href="#contact">Contact</a>
                </div>

            </div>
            
        </div>
    )
}
