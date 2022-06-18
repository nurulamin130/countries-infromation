import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './component/countrires/Countries';


function App() {
  return (
    <div className="App">
      <Countries></Countries>
      
      
    </div>
  );
}
// function Countries()
// // {
// <Countries></Countries>
//   const [countries, setCountries] = useState([]);
//   useEffect(() =>
//   {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => setCountries(data))
    
//   }
    
//     , [])
//   return (
//     <div>
//       <h1>i want to travel all countries{countries.length}</h1>
//       {
//         countries.map(country => <Country name={country.name} capital={country.capital}
        
//         ></Country>)
//       }
//     </div>
//   )
// }
// function Country(props)
// {
//   return (
//     <div>
//       <h2>Name: {props.name}</h2>
//       <h2>Capital: {props.capital}</h2>

//     </div>
//   )
// }

export default App;
