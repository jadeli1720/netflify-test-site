import React from 'react';
import './codePortfolio.scss';

export default function codePortfolio() {
    const onClickGit = () => {
        window.open(`https://github.com/BillyBernard`, "_blank")
    }
    const portfolioClick = () => {
        window.open(`https://github.com/BillyBernard/myPortfolioSite`, "_blank")
    }
    const plantClick = () => {
        window.open(`https://github.com/BillyBernard/web-sprint-challenge-advanced-react`, "_blank")
    }
    const nasaClick = () => {
        window.open(`https://github.com/BillyBernard/nasa-photo-of-the-day`, "_blank")
    }
    const  marketClick = () => {
        window.open(`https://github.com/new-african-market`, "_blank")
    }
    
    return (
        <div className="codePortfolio" id="codePortfolio">
                <h1>My Code</h1>
                <ul>
                    <li className='active'>Featured</li>
                    <li>Portfolio Site</li>
                    <li>React Router Movies</li>
                    <li>Nasa Photo of The Day</li>
                    <li>African Market</li>
                </ul>
                <div className="container">
                    <div className="item">
                    <img src="/images/PortfolioCapture.png" alt="Portfolio Page" onClick={portfolioClick}/>
                    <h3>My Portfolio Code</h3>
                    </div>
                    <div className="item">
                    <img src="/images/PlantCapture.png" alt="Plant Page" onClick={plantClick}/>
                    <h3>Plant Site Code</h3>
                    </div>
                    <div className="item">
                    <img src="/images/NasaCapture.png" alt="Nasa Page" onClick={nasaClick}/>
                    <h3>Nasa Site Code</h3>
                    </div>
                    <div className="item">
                    <img src="/images/CodeCapture.png" alt="African Market" onClick={marketClick}/>
                    <h3>Current Project</h3>
                    </div>
                </div>
                <button className="git" onClick={onClickGit}>My Github</button>
        </div>
    )
}
