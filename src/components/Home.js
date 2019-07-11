import React from 'react';
import './styles/Home.css';

function Home(props) {
    return (
        <section className="home-container">
            <div className="search">
                <input 
                    type="text" 
                    placeholder="Search for country" 
                    className="country-search dark-mode-elements"
                    onChange={props.getTextInput()}
                 />
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
            {props.countries.map(country => (
                <div className="home-countries dark-mode-elements" key={country.name}>
                    <div className="country-flag">
                        <div className="img" style={{backgroundImage: `url(${country.flag})`}}>
                        </div>
                         {/* <img src={country.flag} alt={`${country.name} flag`} /> */}
                    </div>
                    <div className="home-countries-details">
                        <h3>{country.name}</h3>
                        <p>Population: {country.population}</p>
                        <p>Region: {country.region}</p>
                        <p>Capital: {country.capital}</p>
                    </div>
                </div>
            ))}
             {/* <div className="home-countries dark-mode-elements">
                <img src="https://restcountries.eu/data/usa.svg"></img>
                <div className="home-countries-details">
                    <h3>United States of America</h3>
                    <p><b>Population:</b>323,947,000</p>
                    <p><b>Region:</b>Americas</p>
                    <p><b>Capital:</b>Washington, D.C</p>
                </div>
            </div>
            <div className="home-countries dark-mode-elements">2</div>
            <div className="home-countries dark-mode-elements">3</div>
            <div className="home-countries dark-mode-elements">4</div>
            <div className="home-countries dark-mode-elements">5</div>
            <div className="home-countries dark-mode-elements">6</div>
            <div className="home-countries dark-mode-elements">7</div>  */}
        </section>
    )
}

export default Home;