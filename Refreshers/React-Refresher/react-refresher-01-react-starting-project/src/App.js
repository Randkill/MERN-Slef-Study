import React, { useState } from 'react';
import './App.css'
import Names from './Components/NamesLIst/Names.js'
import NewName from './Components/NewName/NewName.js'

const App = () => {
  const [namesList, setName] = useState([
    {id: 'name1', name: 'Erfan'},
    {id: 'name2', name: 'Nima'},
    {id: 'name3', name: 'ErfaNima'}
  ])

  const addNewNameHandler = (newName) => {
    setName(namesList.concat(newName))
  }
  return <div className="names">
    <h1>My list</h1>
    <NewName onAddName={addNewNameHandler}/>
    <Names items={namesList}/>
  </div>
};

export default App;
