import React from 'react';
import "./SkillList.css"

function SkillList(props) {
    console.log(props);

    const width = props.level + "%";
    return (
        <div className="skillList">
            <h6 className="skillList__name">{props.name}</h6>

            <div className="skillList__progress">
                <div style={{width: width}}></div>
            </div>
        </div>
    )
}

export default SkillList
