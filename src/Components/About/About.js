import React from 'react';
import aboutimg from "../../images/About.png";
import "./About.css"

function About(props) {
    return (
        <div className="about " id="about">
            <div className="about__img">
                <img src={aboutimg} alt=""/>
            </div>
            <div className="about__detail">
                <h2 className="title">About Me</h2>
                <p>{props.data.bio}</p>
                <button className="about__detail--btn">Download My Resume</button>
            </div>
        </div>
    )
}

export default About;