import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Details.css';

function Details(props) {
    const [border, setBorder] = useState();

    useEffect(() => {
        fetchBorders()
        
    },[]);

    async function fetchBorders(){
        let borders = [];
        for(let border of props.country[0].borders){
            const result = await fetch(`https://restcountries.eu/rest/v2/alpha/${border}`)
            const resultJSON = await result.json();
            borders = [...borders, resultJSON.name];
        }

        setBorder(borders);
    }

    
    return (
        <section className="country-details">
            <div className="detail-flag">
                <div className="back-button dark-mode-elements">
                    <Link to="/">Back</Link>
                </div>
                <div>
                    <img src={props.country[0].flag} alt={`${props.country[0].name} flag`} />
                </div>
            </div>
            <div className="country-detail-info">
                <h1>{props.country[0].name}</h1>
                <div className="detail-info">
                    <div>
                        <p><span className="detail-heading">Native Name: </span>{props.country[0].name}</p>
                        <p><span className="detail-heading">Population: </span>{props.country[0].population.toLocaleString()}</p>
                        <p><span className="detail-heading">Region: </span> {props.country[0].region}</p>
                        <p><span className="detail-heading">Sub Region: </span>{props.country[0].subregion}</p>
                        <p><span className="detail-heading">Capitol: </span>{props.country[0].capital}</p>
                    </div>
                    <div>
                        <p><span className="detail-heading">Top Level Domain: </span>{props.country[0].topLevelDomain}</p>
                        <p><span className="detail-heading">Currencies: </span>{props.country[0].currencies[0].name}</p>
                        <p><span className="detail-heading">Languages: </span>{props.country[0].languages[0].nativeName}</p>
                    </div>
                </div>
                <div className="country-borders">
                <span className="detail-heading bc">Border Countries: </span>
                            { border ? border.map((border, idx) => (<span className="border-country dark-mode-elements" key={border}>{border}</span>
                    )) : <span></span>}
                </div>
            </div>
        </section>
    )
}

export default Details;