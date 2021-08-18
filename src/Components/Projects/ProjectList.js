import React from 'react';
import ProjectCard from './ProjectCard';
import "./ProjectList.css"

function ProjectList(props) {
    let pinProjects = [];

    for(let project in props.data) {
        pinProjects.push(props.data[project]);
        if(pinProjects.length >=3) {
            break;
        }
    }    

    return (
        <div className="projectList">
            { pinProjects.map((item) => 
                <ProjectCard data={item} />
            )}  

            <ProjectCard data={undefined} title={props.title}/>
        </div>
    )
}

export default ProjectList;