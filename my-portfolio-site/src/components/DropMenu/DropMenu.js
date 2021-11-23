import React from 'react';
import "./dropMenu.scss";

export default function DropMenu({ burgerOpen, setBurgerOpen }) {
    return (
        <div className={"dropMenu " + (burgerOpen && "active")}>
            <ul>
                <li>
                    <a href="#intro">About</a>
                </li>
                <li>
                    <a href="#codePortfolio">Code</a>
                </li>
                <li>
                    <a href="#artPortfolio">Art</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            
        </div>
    )
}
