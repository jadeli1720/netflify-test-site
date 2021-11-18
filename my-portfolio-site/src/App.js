import React from "react";
import "./app.css";
import TopNav from './components/TopNav/TopNav'
import Intro from "./components/Intro/Intro";
import CodePortfolio from "./components/CodePortfolio/CodePortfolio";
import ArtPortfolio from "./components/ArtPortfolio/ArtPortfolio";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="app">
      <TopNav/>
      <div className="sections">
        <Intro/>
        <CodePortfolio/>
        <ArtPortfolio/>
        <Contact/>
      </div>
      
    </div>
  );
}

export default App;
