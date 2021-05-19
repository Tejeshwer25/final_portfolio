import React from 'react';
import ContactLinks from "./ContactLinks";
import "./Contact.css"

function Contact(props) {
    console.log(props.data);
    return (
        <div className="contact" id="contact">
            <div className="contact__title">
                <h2 className="title">Connect With Me...</h2>
            </div>

            <div className="contact__links">
                {Object.entries(props.data).map(([key, value]) => 
                    <ContactLinks name={key} value={value} key={key}/>
                )}
            </div>
        </div>
    )
}

export default Contact;