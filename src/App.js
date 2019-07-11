import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';

function App() {

  const [countries, setCountries] = useState()
  let [fetchedCountries, setFetched] = useState(false);

  useEffect(() => {

    async function fetchAllCountries(){
      const result = await fetch('https://restcountries.eu/rest/v2/all');
      const resultJSON = await result.json();
      setCountries(resultJSON);
      setFetched(true);

    }

    fetchAllCountries();
  }, []);

  async function fetchRegion(e){
    const result = await fetch(`https://restcountries.eu/rest/v2/region/${e.target.innerHTML}`)
    const resultJSON = await result.json();
    setCountries(resultJSON);
  }

  async function fetchCountryByName(e){  
    if(e.target.value.length > 0){
      const result = await fetch(`https://restcountries.eu/rest/v2/name/${e.target.value}`)
      const resultJSON = await result.json();
      setCountries(resultJSON);
    }
  }

  if(fetchedCountries){
  return (
    <div className="App">
      <Header />
      <Home 
        countries={countries}
        fetchRegion={() => fetchRegion}
        getTextInput={() => fetchCountryByName}
      />
      {/* <Details /> */}
    </div>
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
