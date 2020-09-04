import React, { useState } from 'react';
import './App.css'
import Names from './Components/NamesLIst/Names.js'
import NewName from './Components/NewName/NewName.js'

const App = () => {
  //First Element: Latest State Snapshot -- Second Element: Updating Function
  const [namesList, setName] = useState([ //useState ALLWAYS returns an array with two elements!
    {id: 'name1', name: 'Erfan'},
    {id: 'name2', name: 'Nima'},
    {id: 'name3', name: 'ErfaNima'}
  ])

  const addNewNameHandler = (newName) => {
    //setName(namesList.concat(newName))    not a good appraoch if our current state, depends on the previous state.!
    //Because, some issues might occur!!, If our new state is a new piece and not related to previous, use simple above approach!
    //Use this approach
    setName((prevNames) => {
      return prevNames.concat(newName)
    })
  }
  return <div className="names">
    <h1>My list</h1>
    <NewName onAddName={addNewNameHandler}/>
    <Names items={namesList}/>
  </div>
};

export default App;
