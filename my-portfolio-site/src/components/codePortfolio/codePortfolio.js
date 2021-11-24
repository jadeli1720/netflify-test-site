import React from 'react';
import './codePortfolio.scss';

export default function codePortfolio() {
    return (
        <div className="codePortfolio" id="codePortfolio">
                <h1>My Code</h1>
                <ul>
                    <li className='active'>Portfolio Site</li>
                    <li>React Router Movies</li>
                    <li>Nasa Photo of The Day</li>
                </ul>
                <div className="container">
                    <div className="item">
                    <img src="/images/PortfolioCapture.png" alt="Portfolio Page"/>
                    <h3>My Portfolio Code</h3>
                    <img src="/images/PlantCapture.png" alt="Plant Page"/>
                    <h3>Plant Site Code</h3>
                    <img src="/images/NasaCapture.png" alt="Nasa Page"/>
                    <h3>Nasa Site Code</h3>
                    <img src="/images/NasaCapture.png" alt="African Market"/>
                    <h3>Current Project</h3>
                    </div>
                </div>    
        </div>
    )
}
