import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import LoadCountries from './Components/Country/Country'

function App() {
  return (
    <div className="App">
      <h1>Countries</h1>
      <LoadCountries></LoadCountries>
    </div>
  );
}

// function LoadCountries(){
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   },[])
//   return (
//     <div className='countries'>
//     {
//       countries.map(country => <Country name={country.name} population={country.population} region={country.region}></Country>)
//     }
//     </div>
//   )
// }

// function Country(props){
//   return(
//     <div className='country'>
//     <h1>{props.name.common}</h1>
//     <h3>Population: {props.population}</h3>
//     <h3>Region: {props.region}</h3>
//     </div>
//   )
// }

export default App;
