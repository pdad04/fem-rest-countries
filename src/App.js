import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  const [countries, setCountries] = useState()
  const [fetchedCountries, setFetched] = useState(false);
  const [detailCountry, setDetailCountry] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchAllCountries();

  }, []);

  async function fetchAllCountries(){
    const result = await fetch('https://restcountries.eu/rest/v2/all');
    const resultJSON = await result.json();
    setCountries(resultJSON);
    setFetched(true);

  }

  async function fetchRegion(e){
    const result = await fetch(`https://restcountries.eu/rest/v2/region/${e.target.innerHTML}`)
    const resultJSON = await result.json();
    setCountries(resultJSON);
  }

  async function fetchCountryByName(e){
    if(e.target.value.trim().length !== 0){ /* Ensure search is not done if only spaces are entered */
      const result = await fetch(`https://restcountries.eu/rest/v2/name/${e.target.value}`)
      const resultJSON = await result.json();
      
      if(!resultJSON.hasOwnProperty('status')){
        setCountries(resultJSON);
        setError(false);
      }else{
        setError(true);
      }
    }else {
      setError(false);
      fetchAllCountries();
    }
  }

  function getDetails(e){
    const index = parseInt(e.currentTarget.dataset.index);
    const country = countries.slice(index, index + 1);
    setDetailCountry(country);
  }

  if(fetchedCountries){
    return (
    <div className="App">
      <Router>
          <Route path="/" render={Header} />
          <Route exact path="/"
            render={props =>( 
            <Home {...props}
              countries={countries}
              getAll={() => fetchAllCountries}
              fetchRegion={() => fetchRegion}
              getTextInput={() => fetchCountryByName}
              getDetails={(e) => getDetails}
              error={error}
            />)}
          />
          <Route path="/details"
                 render={props => (
                   <Details {...props}
                    country={detailCountry}
                 />)}
          />
      </Router>
    </div>
    )
  }else{
    return (
      <div className="App">
        <Router>
          <Route path="/" render={Header} />
        </Router>
      </div>
    )
  }
}

export default App;
