import React from "react";
import TopNav from './components/TopNav/TopNav'
import Intro from "./components/Intro/Intro";
import CodePortfolio from "./components/CodePortfolio/CodePortfolio";
import ArtPortfolio from "./components/ArtPortfolio/ArtPortfolio";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <TopNav/>
      <Intro/>
      <CodePortfolio/>
      <ArtPortfolio/>
      <Contact/>
    </div>
  );
}

export default App;
