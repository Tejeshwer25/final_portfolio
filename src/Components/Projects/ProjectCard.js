import React from 'react';
import "./ProjectCard.css"

function ProjectCard(props) {
    return (
        <div className="projectCard">
            <div className="projectCard__img">
                <a href={props.value.url} target="_blank" rel="noreferrer"><img src={props.value.img.default} alt="" /></a>
            </div>

            <div className="projectCard__details">
                <p><b>{props.value.domain}</b></p>
                <h4>{props.value.name}</h4>
                <p>{props.value.details}</p>
            </div>
        </div>
    )
}

export default ProjectCard;