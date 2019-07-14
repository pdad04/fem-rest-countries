import React from 'react';
import './styles/Home.css';

function Home(props) {
    const showError = props.error ? 'show' : 'hidden'
    return (
        <section className="home-container">
            <div className="search">
                <input 
                    type="text" 
                    placeholder="Search for country" 
                    className="country-search dark-mode-elements"
                    onChange={props.getTextInput()}
                 />
                 <div className={`error ${showError}`}>Not Found</div>
            </div>
            <div className="dropdown">
                <button className="dropbtn dark-mode-elements">Filter By Region</button>
                <div className="dropdown-content dark-mode-elements">
                    <div onClick={props.fetchRegion()}>Africa</div>
                    <div onClick={props.fetchRegion()}>Americas</div>
                    <div onClick={props.fetchRegion()}>Asia</div>
                    <div onClick={props.fetchRegion()}>Europe</div>
                    <div onClick={props.fetchRegion()}>Oceania</div>
                </div>
            </div>
            {props.countries.map((country, idx) => (
                <div 
                    className="home-countries dark-mode-elements" 
                    key={country.name}
                    data-index={idx}
                    onClick={props.getDetails()}
                >
                    <div className="country-flag">
                        <div className="img" style={{backgroundImage: `url(${country.flag})`}}>
                        </div>
                    </div>
                    <div className="home-countries-details">
                        <h3>{country.name}</h3>
                        <p>Population: {country.population.toLocaleString()}</p>
                        <p>Region: {country.region}</p>
                        <p>Capital: {country.capital ? country.capital : 'N/A'}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Home;