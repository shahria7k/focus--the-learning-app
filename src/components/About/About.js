import React from 'react';
import "./About.css";
const About = () => {
    return (
        <div>
            <div className="about-part">
                <h2 style={{ fontSize: "3em" }} className="text-center">About</h2>
                <h2 style={{ fontSize: "3em" }} className="text-center"><span className="text-warning">Focuse</span></h2>
            </div>
            <div className="container text-center p-5">
                <h3>Fouce is an online learing platform</h3>
            </div>
        </div>
    );
};

export default About;