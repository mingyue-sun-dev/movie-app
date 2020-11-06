import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import MovieDetail from './components/MovieDetail/MovieDetail';

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/:id" component={MovieDetail} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;