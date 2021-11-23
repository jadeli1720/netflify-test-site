import { useState } from "react";
import "./app.scss";
import TopNav from './components/TopNav/TopNav'
import Intro from "./components/Intro/Intro";
import CodePortfolio from "./components/CodePortfolio/CodePortfolio";
import ArtPortfolio from "./components/ArtPortfolio/ArtPortfolio";
import Contact from "./components/Contact/Contact";
import DropMenu from "./components/DropMenu/DropMenu";

function App() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  return (
    <div className="app">
      <TopNav burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen}/>
      <DropMenu burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen}/>
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
