import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import data from './Data/Data';

function App() {
  console.log(data);

  return (
    <div className="app">
      <Header />
      
      <Home />
    </div>
  );
}

export default App;
