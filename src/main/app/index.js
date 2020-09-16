import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../../components/Home';

import './index.scss';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/home/:currentDate" component={Home} />
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
