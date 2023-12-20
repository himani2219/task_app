//import logo from './logo.svg';
import './App.css';
import Search from './components/search/search';
import CurrWeather from './components/current-weather/CurrWeather';

function App() {

const handleOnSearchChange=(searchData) =>{
  console.log(searchData);
};

  return (
    <div className="container">
      <Search onSearchChange = {handleOnSearchChange}/>
      <CurrWeather/>
    </div>
  );
}

export default App;
