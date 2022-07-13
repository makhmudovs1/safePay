import React from 'react';
import "./Menu.css";

const Menu = () => {
    return (
        <header className="header" id="header">
            <div className="container">
                <div className="nav d-flex justify-content-between">
                    <div className="nav__logo">
                        <span className="nav__safe">Safe</span>
                        <span className="nav__pay">Pays</span>
                    </div>
                    <ul className="menu d-flex justify-content-between">
                        <li className="menu__link home">
                            <a href="#">Home</a>
                        </li>
                        <li className="menu__link">
                            <a href="#">How it Works</a>
                        </li>
                        <li className="menu__link">
                            <a href="#">About</a>
                        </li>
                        <li className="menu__link">
                            <a href="#">
                                Pricing
                            </a>
                        </li>
                    </ul>
                    <button className="nav__btn">Log in</button>
                </div>
            </div>
        </header>
    );
};

export default Menu;