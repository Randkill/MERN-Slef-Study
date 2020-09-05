import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import User from './user/pages/User.js'

const App = () => {
  return(
    <Router>
      <Route path="/user">
        <User/>
      </Route>
    </Router>
  )
}

export default App;
