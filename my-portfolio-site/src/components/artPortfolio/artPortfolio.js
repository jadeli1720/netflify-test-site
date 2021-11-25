import React from 'react';
import './artPortfolio.scss';

export default function artPortfolio() {
    const onClickFetch = () => {
        window.open(`http://voyage-choucroute-01318.herokuapp.com/`, "_blank")
    }
    return (
        <div className="artPortfolio" id="artPortfolio">
            
            <div className="left">
                <div className="imgContainer">
                    <img src="/images/logoTest.png" alt="William Paris Logo"/> 
                    <img src="/images/FetchLogoFinal.png" alt="Fetch Logo" onClick={onClickFetch} className="fetch"/>
                </div>
                    
            </div>
            <div className="right">
                <div className="textContainer">
                    <h1>My Art</h1>
                    <p>I am an individual with many different skills and interests. One of these skills that I have been practicing all my life is art. I really enjoy building logos and here are a few of the ones I have created recently. The first Is my own logo for this website. The second is a logo I have created for a fellow engineer for her app known as <span onClick={onClickFetch}>Fetch!</span>. Click on the fetch logo or the highlighted word to see the site. My main tools I use for creating logos are contained in Adobe Creative Suite. This skill has been incredibly useful for my software engineering designs. My art skills are still something i continue to practice and I currently am working on more logos for other software engineers.</p>
                </div>

            </div>
        </div>
    )
}
