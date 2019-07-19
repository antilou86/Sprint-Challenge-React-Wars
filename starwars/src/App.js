import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PeopleCards from './components/PeopleCards.js'
import './App.css';

const App = () => {

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState('');

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to thcdink about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get('https://swapi.co/api/people')
      .then(res => {
        console.log(res.data.results);
        setData(res.data.results);
      })
      .catch(err => console.log('ERROR: ' + err))
  }, [])


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <PeopleCards data={data}/>
    </div>
  );
}

export default App;
