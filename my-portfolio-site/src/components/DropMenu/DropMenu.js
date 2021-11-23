import React from 'react';
import "./dropMenu.scss";

export default function DropMenu({ burgerOpen, setBurgerOpen }) {
    return (
        <div className={"dropMenu " + (burgerOpen && "active")}>
            <ul>
                <li onClick={()=>setBurgerOpen(false)}>
                    <a href="#intro">About</a>
                </li>
                <li onClick={()=>setBurgerOpen(false)}>
                    <a href="#codePortfolio">Code</a>
                </li>
                <li onClick={()=>setBurgerOpen(false)}>
                    <a href="#artPortfolio">Art</a>
                </li>
                <li onClick={()=>setBurgerOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            
        </div>
    )
}
