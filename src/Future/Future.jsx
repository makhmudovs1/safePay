import React from 'react';
import "./Future.css";
import photoMoney from "./photoMoney.png";
// import "../"

const Future = () => {
    return (
        <section className="future" id="future">
            <div className="container">
                <div className="money">
                    <span className="numeration">06 - 06</span>
                    <h1 className="inscription">Use the future, today.</h1>
                    <img src={photoMoney} alt="photoMomey"/>
                </div>
            </div>
        </section>
    );
};

export default Future;