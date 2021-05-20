import React from 'react'
import SkillList from './SkillList';
import "./Skills.css"

function Skills(props) {
    console.log(props);
    return (
        <div className="skills">
            <h4 className="education__title">My Skills</h4>
            <div className="skills__details">
                {Object.entries(props.skills).map(([key, value]) => 
                    <SkillList name={key} level={value} key={key}/>
                )}
            </div>
        </div>
    )
}

export default Skills
