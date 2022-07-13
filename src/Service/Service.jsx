import React from 'react';
import "./Service.css";
import "../FirstSection/FirstSection.css";
import photoImg from "./nickname.svg";
import photoImg1 from "./photo2.png";
import photoImg2 from "./photo3.svg";

const Service = () => {
    return (
        <section className="service" id="service">
            <div className="container">
                <p className="numbers">01 - 06</p>
                <h1 className="steps">
                    Two simple steps to pay fairly and securely for any service
                </h1>
                <div className="iterations d-flex ">
                    <div className="customer">
                        <div className="customer__block d-flex align-items-center">
                            <img src={photoImg} alt="nickname"/>
                            <h3 className="customer__text">
                                Find a customer or client by nickname in chat
                            </h3>
                        </div>
                        <p>
                            After logging in you will have access to a very simple and intuitive chat room where you can search for your client or performer and find each other, chatting with each other and sending each other the files you need.
                        </p>
                    </div>
                    <div className="iterations__customer d-flex">
                        <div className="customer">
                            <div className="customer__block d-flex align-items-center">
                                <img src={photoImg2} alt="nickname"/>
                                <h3 className="customer__text">
                                    Find a customer or client by nickname in chat
                                </h3>
                            </div>
                            <p>
                                After logging in you will have access to a very simple and intuitive chat room where you can search for your client or performer and find each other, chatting with each other and sending each other the files you need.
                            </p>
                        </div>
                        <img src={photoImg1} alt="money"/>
                    </div>
                </div>
                <div className="info d-flex">
                    <button className="start">
                        Get started
                    </button>
                    <button className="more">
                        Read more
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Service;