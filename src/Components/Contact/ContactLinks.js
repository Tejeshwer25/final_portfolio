import React from 'react';
import "./ContactLinks.css"

function ContactLinks(props) {
    return (
        <a href={props.value.link} className="contactLinks" target="_blank" rel="noreferrer">
            <h4>{props.name}</h4>
            <img src={props.value.img.default} alt={props.name} />
        </a>
    )
}

export default ContactLinks;