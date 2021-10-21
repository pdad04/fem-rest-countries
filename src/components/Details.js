import React, { useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import './styles/Details.css';

function Details(props) {   
    const currentCountry = props.match.params.id;
    const country = props.country ? props.country[0] : JSON.parse(localStorage.getItem(currentCountry));

    useEffect(() => {
        if(!localStorage.getItem(currentCountry) && props.country) {
            localStorage.setItem(currentCountry, JSON.stringify(props.country[0]));
        }
    })

    if(!country) { 
        return (
            <div className="container">
                <div className="not-found">
                    <h1 className="not-found__text">Country Not Found. Return to main page</h1>
                    <div className="country-details__main-back">
                        <Link to="/">Back</Link>
                    </div>
                </div>
            </div>
        )
    }else {
        return (
        <div className="container">
            <section className="country-details">
                <div className="country-details__main">
                    <div className="country-details__main-back">
                        <Link to="/">Back</Link>
                    </div>
                    <div className="country-details__main-flag">
                        <img src={country.flag} alt={`${country.name} flag`} />
                    </div>
                </div>
                <div className="country-details__secondary">
                    <div className="country-details__secondary-country-info">
                        <div>
                            <ul>
                                <li className="country-info__details"><span className="country-info__details-header">Native Name:</span> {country.name}</li>
                                <li className="country-info__details"><span className="country-info__details-header">Population:</span> {country.population.toLocaleString()}</li>
                                <li className="country-info__details"><span className="country-info__details-header">Region:</span> {country.region}</li>
                                <li className="country-info__details"><span className="country-info__details-header">Sub Region:</span> {country.subregion}</li>
                                <li className="country-info__details"><span className="country-info__details-header">Capitol:</span> {country.capital}</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className="country-info__details"><span className="country-info__details-header">Top Level Domain:</span> {country.topLevelDomain}</li>
                                <li className="country-info__details"><span className="country-info__details-header">Currencies:</span> {country.currencies[0].name}</li>
                                <li className="country-info__details"><span className="country-info__details-header">Languages:</span> {country.languages[0].name}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="country-details__secondary-country-borders">
                        <span>Border Countries: </span>
                                <ul className="country-borders__borders-list">
                                    { country.borders ? country.borders.map((border, idx) => (<li className="country-border__border-list__item" key={border}>{border}</li>)) : <></> }
                                </ul>
                    </div>
                </div>
            </section>
        </div>
        )
    }
}

export default Details;