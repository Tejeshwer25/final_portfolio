import React from 'react';
import "./HomeDetail.css"

function HomeDetail(props) {
    return (
        
        <div className="detail">
            {(props.name) ? <div className="detail__content">
                <p className="detail__greet">Hello, I'm</p>
                <h1>{props.name}</h1>
                <p className="detail__profession">{props.profession}</p>
            </div> : <div className="detail__contentimg" id="img">
                <img src={props.img} alt="Profile" className="detail__content--img"  />
            </div>}
            
        </div>
    )
}

export default HomeDetail;