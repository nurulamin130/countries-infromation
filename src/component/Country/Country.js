import React from 'react';
import './Country.css';

const Country = (props) =>
{
    const {flags,  name, population, capital } = props.country;
    console.log(props.country);
    return (
        <div className='country'>
            
            <h2>This is : {name.common }</h2>           
            <h2>Capital : {capital}</h2>
            <img src={flags.png} alt="" />
            <h2>Population : {population}</h2>
           
        </div>
    );
};

export default Country;