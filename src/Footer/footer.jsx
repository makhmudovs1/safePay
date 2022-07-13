import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="about d-flex">
                    <div className="about__menu">
                        <h4>
                            Menu
                        </h4>
                        <ul className="nav">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">How it works</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Pricing</a>
                            </li>
                            <li>
                                <a href="#">Tokens</a>
                            </li>
                        </ul>
                    </div>
                    <div className="about__company">
                        <h4>Company</h4>
                        <ul className="nav">
                            <li>
                                <a href="#">Invest in us</a>
                            </li>
                            <li>
                                <a href="#">Muminov Digital Agency</a>
                            </li>
                            <li>
                                <a href="#">Muminov Partners for<br/> Agencies</a>
                            </li>
                        </ul>
                    </div>
                    <div className="about__follow">
                        <h4>Follow us</h4>
                        <ul className="nav">
                            <li>
                                <a href="#">Instagram</a>
                            </li>
                            <li>
                                <a href="#">LinkedIn</a>
                            </li>
                            <li>
                                <a href="#">Facebook</a>
                            </li>
                            <li>
                                <a href="#">Telegram</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border"></div>
                <div className="d-flex">
                    <div className="reserve">
                        All rights reserve 2022
                    </div>
                    <div className="design">
                        Designed by <a href="#">Muminov Agency</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;