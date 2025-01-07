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

        console.log(props);
    }    

    return (
        <div className="projectList">
            { pinProjects.map((item) => 
                <ProjectCard data={item} />
            )}  

            {
                // Show below component only if list length is greater than 4, props.data is an object
                (Object.keys(props.data).length) > 3 && <ProjectCard data={undefined} title={props.title}/>
            }   
        </div>
    )
}

export default ProjectList;