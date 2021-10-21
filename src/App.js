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
  let [searchText, setSearchText] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchAllCountries();

  }, []);

  async function fetchAllCountries(){
    const result = await fetch('https://restcountries.com/v2/all');
    const resultJSON = await result.json();
    setCountries(resultJSON);
    setFetched(true);

  }

    const fetchRegion = async (e) => {
    const result = await fetch(`https://restcountries.com/v2/region/${e.target.innerHTML}`)
    const resultJSON = await result.json();
    setCountries(resultJSON);
  }

  async function fetchCountryByName(e){
    setSearchText(e.target.value);
  
    if(e.target.value.trim().length !== 0){ 
      const result = await fetch(`https://restcountries.com/v2/name/${e.target.value}`)
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

  async function getDetails(e){
    console.log(e.currentTarget);
    const index = parseInt(e.currentTarget.dataset.index);
    const country = countries.slice(index, index + 1);
    setDetailCountry(country);

  }

  if(fetchedCountries){
    return (
    <div className="App">
      <Header />
      <Router>
          <Route exact path="/"
            render={props =>( 
            <Home {...props}
              countries={countries}
              getAll={fetchAllCountries}
              fetchRegion={fetchRegion}
              getTextInput={() => fetchCountryByName}
              getDetails={(e) => getDetails}
              searchText={searchText}
              error={error}
            />)}
          />
          <Route path="/details/:id"
                 render={props => (
                   <Details {...props}
                    country={detailCountry}
                    getAll={fetchAllCountries}
                 />)}
          />
      </Router>
    </div>
    )
  }else{
    return (
      <div className="App">
        <Header />
      </div>
    )
  }
}

export default App;
