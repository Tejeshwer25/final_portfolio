import React from 'react';
import ProjectList from "./ProjectList";
import "./Project.css";

function Project(props) {
    return (
        <div className="project" id="projects">
            <div className="project__header">
                <h2 className="title">My Projects</h2>
            </div>

            <div className="project__list">
                <ProjectList data={props.data}/>
            </div>
        </div>
    )
} 

export default Project;