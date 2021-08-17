import React from 'react';
import ProjectPageCard from './ProjectPageCard';
import './Project_Page.css';

function ProjectPage(props) {
    let projects = [];
    for(let project in props.data) {
        projects.push(props.data[project]);
    }
    return (
        <div className="projectPage">
            <header className="projectPage__header">
                <h2>My Projects</h2>
            </header>

            <section className="projectPage__projects">
                {projects.map(item => <ProjectPageCard data={item} />)}
            </section>
        </div>
    )
}

export default ProjectPage;