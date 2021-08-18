import React from 'react';
import ProjectList from "./ProjectList";
import "./Project.css";

function Project(props) {
    return (
        <div className="project" id={props.title}>
            <div className="project__header">
                <h2 className="title">My {props.title}</h2>
            </div>

            <div className="project__list">
                <ProjectList data={props.data} title={props.title}/>
            </div>
        </div>
    )
} 

export default Project;