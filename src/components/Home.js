import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';

function Home(props) {
    return (
        <section className="home-container">
            <div className="search-filter">
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search for country"
                        className="country-search dark-mode-elements"
                        onChange={props.getTextInput()}
                        value={props.searchText}
                     />
                     {props.error ? <div className={`error`}>Not Found</div> : <div></div> }
                </div>
                <div className="dropdown">
                    <ul className="home-region-dropdown">
                        <li>Choose Region</li>
                        <ul className="home-region-dropdown__sub">
                            <li className="home-region-dropdown__sub-items" onClick={props.fetchRegion()}>Africa</li>
                            <li className="home-region-dropdown__sub-items" onClick={props.fetchRegion()}>Americas</li>
                            <li className="home-region-dropdown__sub-items" onClick={props.fetchRegion()}>Asia</li>
                            <li className="home-region-dropdown__sub-items" onClick={props.fetchRegion()}>Europe</li>
                            <li className="home-region-dropdown__sub-items" onClick={props.fetchRegion()}>Oceania</li>
                        </ul>
                    </ul>
                    {/* <button className="dropbtn dark-mode-elements">Filter By Region</button>
                    <div className="dropdown-content dark-mode-elements">
                        <div onClick={props.fetchRegion()}>Africa</div>
                        <div onClick={props.fetchRegion()}>Americas</div>
                        <div onClick={props.fetchRegion()}>Asia</div>
                        <div onClick={props.fetchRegion()}>Europe</div>
                        <div onClick={props.fetchRegion()}>Oceania</div>
                    </div> */}
                </div>
            </div>
            {props.countries.map((country, idx) => (
                <Link to={{ pathname:`/details/${country.name}` }} key={country.name} className="card">
                    <div 
                        className="home-countries dark-mode-elements" 
                        data-index={idx}
                        onClick={props.getDetails()}
                    >
                        <div className="country-flag">
                            <div className="img">
                                <img src={country.flag} alt="" className="img"/>
                            </div>
                        </div>
                        <div className="home-countries-details">
                            <h3>{country.name}</h3>
                            <ul className="home-countries-details__text">
                                <li><strong>Population</strong>: {country.population.toLocaleString()}</li>
                                <li><strong>Region</strong>: {country.region}</li>
                                <li><strong>Capital</strong>: {country.capital ? country.capital : 'N/A'}</li>
                            </ul>
                        </div>
                    </div>
                </Link>
            ))}
        </section>
    )
}

export default Home;