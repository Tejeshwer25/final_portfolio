import React from "react";

function ExperienceList(props) {
    return (
        <div className='experience__list'>
            {
                props.data.map((item) => 
                    <div className='experience__item'>
                        <div className="experience__itemHeader">
                            <div className="experience__titleCompany">
                                <h3 className='experience__role'>{item.role}</h3>
                                <p className='experience__companyName'>{item.companyName}</p>
                            </div>
                            <p className='experience__date'>{item.startDate} - {item.endDate}</p>
                        </div>
                        
                        <ul className="experience__description">
                            {
                                item.description.map((point) => 
                                    <li className='experience__point'>{point}</li>
                                )
                            }
                        </ul>

                        <div className="experience__techStack">
                            {
                                item.technologies.map((tech) => 
                                    <p className='experience__tech'>{tech}</p>
                                )
                            }
                        </div>
                    </div>
                ).reverse()
            }
        </div>
    );
}

export default ExperienceList;