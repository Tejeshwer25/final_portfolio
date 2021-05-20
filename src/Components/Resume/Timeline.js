import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./Timeline.css"

function Timeline(props) {
    return (
        <div className="timeline">
			<VerticalTimeline layout={'1-column-left'}>
                {Object.entries(props.education).map(([key, value]) => 
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    key={key}
                    date={value.year}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">{value.degree}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{value.college}</h4>
                        <p>
                        Score: {value.score}
                        </p> 
                    </VerticalTimelineElement>
                )}
            </VerticalTimeline>
		</div>
    )
}

export default Timeline;