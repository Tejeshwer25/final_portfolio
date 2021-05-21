import React from 'react';
import Timeline from './Timeline';
import "./Education.css";

function Education(props) {
    return (
        <div className="education">
            <h4 className="education__title">My Education</h4>
            <div className="education__timeline">
                <Timeline education={props.education}/>
            </div>
        </div>
    ) 
}

export default Education
