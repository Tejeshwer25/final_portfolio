import React from 'react';
import "./Experience.css";
import ExperienceList from './ExperienceList';

function Experience(props) {
  return (
    <div className='experience' id={props.title}>
        <div className='experience__header'>
            <h2 className='title'>My {props.title}</h2>
        </div>

        <div className='experience__list'>
            <ExperienceList data={props.data} />
        </div>
    </div>
  );
}

export default Experience;