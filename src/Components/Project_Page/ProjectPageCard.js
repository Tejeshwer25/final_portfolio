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

                {props.title === "project" ? <div>
                        <a href={props.data.url} target="_blank" rel="noreferrer">Visit {props.title}</a>
                        {props.data.github ? <a href={props.data.github} target="_blank" rel="noreferrer">Visit Github Repo</a> : <></>}
                    </div>
                    :
                    <div>
                        {props.data.mediumURL ? <a href={props.data.mediumURL} target="_blank" rel="noreferrer">View blog on Medium</a> : <></>}
                        {props.data.hashnodeURL ? <a href={props.data.hashnodeURL} target="_blank" rel="noreferrer">View blog on HashNode</a> : <></>}
                        {props.data.devURL ? <a href={props.data.devURL} target="_blank" rel="noreferrer">View blog on Dev.to</a> : <></>}
                    </div>    
                }
                
            </div>
        </div>
    )
}

export default ProjectPageCard;