import React from 'react';
import ProjectCard from './ProjectCard';
import "./ProjectList.css"

function ProjectList(props) {
    // console.log(props.data);
    return (
        <div className="projectList">
            {Object.entries(props.data).map(([key, value]) => 
                <ProjectCard key={key} value={value} />
            )}
        </div>
    )
}

export default ProjectList;