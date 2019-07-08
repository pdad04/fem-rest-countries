import React from 'react';
import './styles/Home.css';

function Home() {
    return (
        <section className="home-container">
            <div className="search">
                <input type="text" placeholder="Search for country" className="country-search dark-mode-elements"></input>
            </div>
            <div className="dropdown">
                <button class="dropbtn dark-mode-elements">Filter By Region</button>
                <div className="dropdown-content dark-mode-elements">
                    <a href="#">Africa</a>
                    <a href="#">America</a>
                    <a href="#">Asia</a>
                    <a href="#">Europe</a>
                    <a href="#">Oceania</a>
                </div>
            </div>
            <div className="home-countries dark-mode-elements">
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
            <div className="home-countries dark-mode-elements">7</div>
        </section>
    )
}

export default Home;