import React from 'react';
import "./mission.css";
import photoImg from "./photoImg.png";

const Mission = () => {
    return (
        <section className="mission" id="mission">
            <div className="container">
                <div className="block">
                    <span className="numeration">02 - 06</span>
                    <h1 className="inscription">Our mission is to provide honesty and reliability to all performers and clients</h1>
                    <div className="numbers d-flex justify-content-between">
                        <div className="numbers__users">
                            <span >
                                200M
                            </span>
                            <p>Active Users</p>
                        </div>
                        <div className="numbers__users">
                            <span>5B$</span>
                            <p>Money transferred</p>
                        </div>
                        <div className="numbers__users">
                            <span>0</span>
                            <p>Unhappy customers</p>
                        </div>
                        <div className="numbers__users">
                            <span>17</span>
                            <p>Countries</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Mission;