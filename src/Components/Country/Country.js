import { useEffect, useState } from 'react';
// import React from 'react';
import './Country.css'

function LoadCountries() {
    const [countries, setCountries] = useState([]);
    console.log(countries)
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div className='countries'>
            {
                countries.map(country => <Country country={country} key={country.cca3}></Country>)
            }
        </div>
    )
}

function Country(props) {
    const { name, population, region, flags} = props.country;
    return (
        <div className='country'>
            <h1>{name.common}</h1>
            <h3>Population: {population}</h3>
            <h3>Region: {region}</h3>
            <img src={flags.png} alt="" />
        </div>
    )
}


export default LoadCountries;

// rsc > stateless component skeleton

/*

function LoadCountries() {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div className='countries'>
            {
                countries.map(country => <Country name={country.name} population={country.population} region={country.region}></Country>)
            }
        </div>
    )
}

function Country(props) {
    return (
        <div className='country'>
            <h1>{props.name.common}</h1>
            <h3>Population: {props.population}</h3>
            <h3>Region: {props.region}</h3>
        </div>
    )
}

*/