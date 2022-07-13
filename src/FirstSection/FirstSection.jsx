import React from 'react';
import "./FirstSection.css";
import photoImg from "./photo1.png";

const FirstSection = () => {
    return (
        <section className="section" id="section">
            <div className="container">
                <div className="transfers d-flex align-items-center">
                    <div className="payments">
                        <h1>
                            Safe and secure paymants for digital perfomers
                        </h1>
                        <p className="text">
                            We provide reliable and secure transfers worldwide for work done using cryptocurrencies and conventional currencies, and ensure honesty and transparency between performers and customers
                        </p>
                        <div className="payments__btn d-flex">
                            <button className="start">
                                Get started
                            </button>
                            <button className="more">
                                Read more
                            </button>
                        </div>
                    </div>
                    <div>
                        <img src={photoImg} alt="money"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FirstSection;