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
                <div>{props.data.bio.map(data => <p>{data}</p>)}</div>
                <button className="about__detail--btn"><a href={props.data.resume} target="_blank" rel="noreferrer">Download My Resume</a></button>
            </div>
        </div> 
    )
}

export default About;