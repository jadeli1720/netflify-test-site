import React from 'react';
import './intro.scss';

export default function intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="/images/MyPhoto.jpg" alt="William Paris"/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h1>Hello and welcome to my personal website.</h1>
                    <p>I am a Full-Stack Web Developer in Colorado and I study at the Bloom Institute of Technology. I am capable of learning new coding languages in a timely manner to better my professional coding skills. Software Engineering is a field that interests me greatly and it has been a pursuit that combines two passions of mine, coding and art. I am constantly trying to learn more and improve my development skills.</p>
                    <p>When I am not coding, I am usually enjoying video games with my friends, getting lost in fiction and playing ice hockey. My favorite games include Guild Wars and Pokemon, while my favorite comic book series is Saga. </p>
                    <h2>React | JavaScript | HTML | CSS | Redux | Git | Node | SQL | Adobe Creative Suite</h2>
                    <button className="resume"><a href="/files/WilliamParisResume.pdf" target="_blank">Resume</a></button>
                </div>
            </div>
            
        </div>
    )
}
