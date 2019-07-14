import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';

function App() {

  const [countries, setCountries] = useState()
  let [fetchedCountries, setFetched] = useState(false);
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
    if(e.target.value.trim().length !== 0){
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

  if(fetchedCountries && !detailCountry){
    return (
      <div className="App">
        <Header />
        <Home 
          countries={countries}
          fetchRegion={() => fetchRegion}
          getTextInput={() => fetchCountryByName}
          getDetails={(e) => getDetails}
          error={error}
        />
        {/* <Details /> */}
      </div>
    )
  }else if(detailCountry){
    return(
      <Details
        country={detailCountry}
      />
    );
  }else{
    return (
      <div className="App">
        <Header />
      </div>
    )
  }
}

export default App;
