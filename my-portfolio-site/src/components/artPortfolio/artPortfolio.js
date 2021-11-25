import React from 'react';
import './artPortfolio.scss';

export default function artPortfolio() {
    return (
        <div className="artPortfolio" id="artPortfolio">
            <h1>My Art</h1>
            <div className="container">
                <div className="item">
                    <img src="/images/logoTest.png" alt="William Paris Logo"/>
                    <h3>William Paris Logo</h3>
                </div>
                <div className="item">
                    <img src="/images/FetchLogoFinal.png" alt="Fetch Logo"/>
                    <h3>Fetch Logo</h3>
                </div>
            </div>
        </div>
    )
}
