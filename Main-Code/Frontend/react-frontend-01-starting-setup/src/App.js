import React from 'react';

import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import User from './user/pages/User.js'
import NewPlace from './places/pages/NewPlace.js'
import MainHeaderNavigation from './shared/components/Navigation/MainNavigation.js'

const App = () => {
  return(
    <Router>
      <MainHeaderNavigation />
      <main>
        <Switch>
        <Route path="/" exact={true}>
          <User/>
        </Route>
        <Route path="/places/new" exact={true}>
          <NewPlace/>
        </Route>
        <Redirect to="/"/>
        </Switch>
      </main>
    </Router>
  )
}

export default App;
