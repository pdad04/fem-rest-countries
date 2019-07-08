import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* <Details /> */}
    </div>
  );
}

export default App;
