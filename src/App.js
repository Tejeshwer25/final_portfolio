import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from "./Components/About/About"
import data from './Data/Data';

function App() {
  console.log(data);

  return (
    <div className="app">
      <Header />
      
      <div className="app__main" id="home">
        <Home data={data.profile}/>

        <About data={data.profile}/>
      </div>
      
    </div>
  );
}

export default App;