import React from "react";
import '../App.css';

const About = () => {
    return (
        <div className="about">
            <h1>Welcome!</h1>
            <div className="about-container">
                <div className="about-pic-container">
                    <img src="japanpfp.JPG" alt="japanpfp" className="pic" />
                </div>
                <div className="about-bio-container">
                    <p>I am currently an Analyst at IT Cadre and based out of the DMV area.
                        I received a B.A. in Film and Video Studies from George Mason University.
                        When I'm not working I enjoy traveling, streaming, and hanging out with friends and family!

                        My inbox is always open! Feel free to contact me through LinkedIn if you'd like to chat!</p>
                </div>
            </div>
        </div>

    )
}

export default About;
