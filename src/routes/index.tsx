import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import  from '../pages/';
import Movie from '../pages/Movies';
import Profile from '../pages/Profile'

const Routes: React.FC = () => (
  <Switch>
    {/* <Route path="/" exact component={} /> */}
    <Route path="/Movie" component={Movie} />
    <Route path="/Profile" component={Profile} />
  </Switch>
);

export default Routes;
