import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}
function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  return (
    <div>
      <h1>Visiting Every!!!</h1>
      <h3>Abaliable Countries: {countries.length}</h3>
      {
        countries.map(country => <Country name={country.name.common} population={country.population} area={country.area}></Country>)
      }
    </div>
  )
}

function Country(props){
  return (
    <div className="desh">
      <h1>Name: {props.name}</h1>
      <h3>Population: {props.population}</h3>
      <p>Area: {props.area}</p>
    </div>
  )
}

export default App;
