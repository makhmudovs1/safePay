import React from 'react';
import "./review.css";
import photo from "./1.png";

const Review = () => {
    return (
        <section className="review" id="review">
            <div className="container">
                <span className="numeration">
                    05 - 06
                </span>
                <h1 className="inscription">
                    See what people are saying about SafePays
                </h1>
                <img src={photo} alt="photo"/>
            </div>
        </section>
    );
};

export default Review;