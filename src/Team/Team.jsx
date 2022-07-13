import React from 'react';
import "./Team.css";
import image10 from './10.png';
import image1 from './1.svg';
import image2 from './2.svg';
import image3 from './3.svg';
import image4 from './4.svg';
import image5 from './5.svg';

const Team = () => {
    return (
        <section className="team" id="team">
            <div className="container">
                <span className="numeration">04 - 06</span>
                <h1 className="inscription">Meet our incredible team</h1>
                <div className="offer d-flex justify-content-between">
                    <div className="founder">
                        <img src={image10} alt="image10"/>
                        <h4>Jahongir Muminov</h4>
                        <p>Founder and CEO of SafePays and Muminov Digital Agency. 5 years in IT and 2 years in entrepreneurship</p>
                        <div className="icons">
                            <img src={image1} alt="image1"/>
                            <img src={image2} alt="image2"/>
                            <img src={image3} alt="image3"/>
                            <img src={image4} alt="image4"/>
                            <img src={image5} alt="image5"/>
                        </div>
                    </div>
                    <div className="founder">
                        <img src={image10} alt="image10"/>
                        <h4>Jahongir Muminov</h4>
                        <p>Founder and CEO of SafePays and Muminov Digital Agency. 5 years in IT and 2 years in entrepreneurship</p>
                        <div className="icons">
                            <img src={image1} alt="image1"/>
                            <img src={image2} alt="image2"/>
                            <img src={image3} alt="image3"/>
                            <img src={image4} alt="image4"/>
                            <img src={image5} alt="image5"/>
                        </div>
                    </div>
                    <div className="founder">
                        <img src={image10} alt="image10"/>
                        <h4>Jahongir Muminov</h4>
                        <p>Founder and CEO of SafePays and Muminov Digital Agency. 5 years in IT and 2 years in entrepreneurship</p>
                        <div className="icons">
                            <img src={image1} alt="image1"/>
                            <img src={image2} alt="image2"/>
                            <img src={image3} alt="image3"/>
                            <img src={image4} alt="image4"/>
                            <img src={image5} alt="image5"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;