import React, { useEffect, useState } from 'react';
import { getItem } from './getItems'
import axios from 'axios';


export const CountryList = () => {
    const [countries, setCountries] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        getItem('https://restcountries.eu/rest/v2/all')
            .then(res => {
                setCountries(res)
                setLoad(true)
            }).catch(err => {
                setError(err)
                setLoad(true)
            })
    }, [])

    if (load) {
        return (
            // if  error show error, otherwise show countries 
            <ul>
                {error ? <li>{error.message}</li> : countries.map((country, index) => {
                    return <li key={index}>{country.name}</li>
                })}
            </ul>
        )
    } else {
        return (
            <div>
                loading...
            </div>
        )
    }
}