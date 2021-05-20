import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from "./Components/About/About";
import Project from "./Components/Projects/Project";
import Contact from "./Components/Contact/Contact";
import Resume from "./Components/Resume/Resume";
import data from './Data/Data';

function App() {
  console.log(data);

  return (
    <div className="app">
      <Header />
      
      <div className="app__main" id="home">
        <Home data={data.profile}/>

        <About data={data.profile}/>

        <Resume education={data.education} skills={data.skills}/>

        <Project data={data.projects}/>

        <Contact data={data.social} />
      </div>
      
    </div>
  );
}

export default App;