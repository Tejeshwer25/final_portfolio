import React from 'react';
import HomeDetail from './HomeDetail';
import "./Home.css"

function Home(props) {
    // console.log(props);
    return (
        <div className="home">
            <HomeDetail name={props.data.name} profession={props.data.profession}/>

            <HomeDetail img={props.data.image.default} />
        </div>
    )
}

export default Home;