import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from "./Components/About/About";
import Project from "./Components/Projects/Project";
import Contact from "./Components/Contact/Contact";
import Resume from "./Components/Resume/Resume";
import data from './Data/Data';

import {BrowserRouter as Router,
        Switch,
        Route
      } from 'react-router-dom';
import ProjectPage from './Components/Project_Page/Project_Page';

function App() {

  return (
    <div className="app">
      <Header />
      
      <Router>
        <Switch>
          <div className="app__main" id="home">
            <Route exact path="/">
              <Home data={data.profile}/>

              <About data={data.profile}/>

              <Resume education={data.education} skills={data.skills}/>

              <Project data={data.projects}/>

              <Contact data={data.social} />
            </Route>

            <Route exact path="/projects">
              <ProjectPage data={data.projects}/>
            </Route>
          </div>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;