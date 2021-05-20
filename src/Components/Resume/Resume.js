import React from 'react';
import Education from "./Education";
import Skills from "./Skills";
import "./Resume.css"

function Resume(props) {
    return (
        <div className="resume" id="resume">
            <Education education={props.education}/>

            <Skills skills={props.skills}/>
        </div>
    )
}

export default Resume;