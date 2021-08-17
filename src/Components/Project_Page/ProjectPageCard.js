import React from 'react';
import './ProjectPageCard.css';

function ProjectPageCard(props) {
    return (
        <div className="projectPageCard">
            <div className="projectPageCard__img">
                <img src={props.data.img.default} alt=""/>
            </div>

            <div className="projectPageCard__description">
                <h5>{props.data.name}</h5>
                <p>{props.data.domain}</p>
                <p>{props.data.details}</p>
                <div>
                    <a href={props.data.url} target="_blank" rel="noreferrer">Visit Project</a>
                    {props.data.github ? <a href={props.data.github} target="_blank" rel="noreferrer">Visit Github Repo</a> : <></>}
                </div>
            </div>
        </div>
    )
}

export default ProjectPageCard;