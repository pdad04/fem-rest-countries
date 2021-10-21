import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';

function Home(props) {

    useEffect(() => {
        const regionSelect = document.querySelectorAll(".region-select__region");
        regionSelect.forEach(el => el.addEventListener('click', toggleActiveRegion));

        return() => {
            regionSelect.forEach(el => el.removeEventListener("click", toggleActiveRegion));
        }
    }, []);

    const toggleActiveRegion = (e) => {
        const active = document.querySelectorAll(".region-select__region-active");

        if(active.length !== 0) {
            active[0].classList.toggle("region-select__region-active")
            if(active[0].innerHTML === e.target.innerHTML) {
                props.getAll();
                return;
            };
        }

        e.target.classList.toggle("region-select__region-active");
        props.fetchRegion(e);
    }

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
                    <ul className="region-select">
                        <li className="region-select__region">Africa</li>
                        <li className="region-select__region">Americas</li>
                        <li className="region-select__region">Asia</li>
                        <li className="region-select__region">Europe</li>
                        <li className="region-select__region">Oceania</li>
                    </ul>
                </div>
            </div>
            <div className="home-container__countries">
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
                                <h3 className="home-countries-details__country">{country.name}</h3>
                                <ul className="home-countries-details__text">
                                    <li><span className="home-countries-details__text-header">Population:</span> {country.population.toLocaleString()}</li>
                                    <li><span className="home-countries-details__text-header">Region: </span>{country.region}</li>
                                    <li><span className="home-countries-details__text-header">Capital: </span>{country.capital ? country.capital : 'N/A'}</li>
                                </ul>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Home;