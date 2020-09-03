import React from 'react';
import './App.css'
import Names from './Components/Names.js'

const App = () => {
  const NamesList = [
    {id: 'name1', name: 'Erfan'},
    {id: 'name2', name: 'Nima'},
    {id: 'name3', name: 'ErfaNima'}
  ]
  return <div className="names">
    <h1>My list</h1>
    <Names items={NamesList}/>
  </div>
};

export default App;
