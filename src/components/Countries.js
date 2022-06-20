import React from 'react';
import {v4 as uuidv4} from "uuid";
import Country from './Country';
import "./Countries.css";

const Countries = (props) => {
    return (
        <div className='countries'>
            {props.countries.map((country) => {
                const countryNew = {country, id: uuidv4()}

                return <Country {...countryNew}
                 key={countryNew.id}
                 onRemoveCountry={props.onRemoveCountry}
                 />
            })}
        </div>
    );
};

export default Countries;