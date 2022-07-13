import React from 'react';
import './Security.css';
import imageFirst from "./1.svg";
import imageSecond from "./2.svg";
import imageThird from "./3.svg";
import imageFour from "./4.svg";
import imageFive from "./5.png";


const Security = () => {
    return (
        <section className="security" id="security">
            <div className="container">
                <div className="simple">
                    <span className="numeration">03 - 06</span>
                    <h1 className="inscription">Our mission is your financial security </h1>
                </div>
                <div className="community d-flex align-items-center">
                    <div className="community__item">
                        <div className="community__driven d-flex">
                            <div className="driven">
                                <img src={imageFirst} alt="imageFirst"/>
                                <h3>Community driven</h3>
                                <p className="community__text">A community that is constantly growing and evolving every day, attracting more users and <br/>  improving the service of the product</p>
                            </div>
                            <div className="driven">
                                <img src={imageSecond} alt="imageSecond"/>
                                <h3>Transparent</h3>
                                <p className="driven__text">All transactions and activities are transparent and protected. Everything is fair and secure</p>
                            </div>
                        </div>
                        <div className="community__driven d-flex">
                            <div className="driven">
                                <img src={imageThird} alt="imageThird"/>
                                <h3>Simple</h3>
                                <p className="simple__text">A beautiful, user-friendly interface that everyone can quickly navigate and use simply</p>
                            </div>
                            <div className="driven">
                                <img src={imageFour} alt="imageFour"/>
                                <h3>Fast</h3>
                                <p className="fast__text"> Quick transfers and transactions and instant messaging</p>
                            </div>
                        </div>
                    </div>
                    <div className="community__logo">
                        <img src={imageFive} alt="imageFive"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Security;