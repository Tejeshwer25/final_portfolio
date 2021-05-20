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
                <button className="about__detail--btn"><a href="https://drive.google.com/file/d/1Q8Cm7mSlXpkQO_FeBIpT5JQ3Vdsf2vl_/view?usp=sharing" target="_blank" rel="noreferrer">Download My Resume</a></button>
            </div>
        </div>
    )
}

export default About;