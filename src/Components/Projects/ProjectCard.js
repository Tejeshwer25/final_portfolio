import React from 'react';
import "./ProjectCard.css";

import {Link} from 'react-router-dom';

function ProjectCard(props) {
    return (
        <div className="projectCard">
            {props.data !== undefined ? 
                <div>
                    <div className="projectCard__img">
                        <a href={props.data.url} target="_blank" rel="noreferrer"><img src={props.data.img.default} alt="" /></a>
                    </div>

                    <div className="projectCard__details">
                        <p><b>{props.data.domain}</b></p>
                        <h4>{props.data.name}</h4>
                        <p>{props.data.details}</p>
                    </div>
                </div> 
                : 
                <Link to="/projects" className="projectCard__seeMore">
                    <div>
                        <p>O<span>&gt;</span></p>
                    </div>
                    <h5>More Projects</h5>
                </Link>
            }
            
        </div>
    )
}

export default ProjectCard;