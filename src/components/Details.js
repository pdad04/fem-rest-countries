import React from 'react';
import './styles/Details.css';

function Details() {
    return (
        <section className="country-details">
            <div className="detail-flag">
                <div className="back-button">
                    Back
                </div>
                <div>
                    <img src="https://restcountries.eu/data/usa.svg" />
                </div>
            </div>
            <div className="country-detail-info">
                <h1>United States of America</h1>
                <div className="detail-info">
                    <div>
                        <p><span className="detail-heading">Native Name: </span> United States of America</p>
                        <p><span className="detail-heading">Population: </span>394,324,000</p>
                        <p><span className="detail-heading">Region: </span> Americas</p>
                        <p><span className="detail-heading">Sub Region: </span>North America</p>
                        <p><span className="detail-heading">Capitol: </span>Washington, D.C.</p>
                    </div>
                    <div>
                        <p><span className="detail-heading">Top Level Domain: </span>.us</p>
                        <p><span className="detail-heading">Currencies: </span>Dollar</p>
                        <p><span className="detail-heading">Languages: </span>English</p>
                    </div>
                </div>
                <div>
                    <p><span className="detail-heading bc">Border Countries: </span><span className="border-country dark-mode-elements">Mexico</span><span className="border-country dark-mode-elements">Canada</span></p>
                </div>
            </div>
        </section>
    )
}

export default Details;