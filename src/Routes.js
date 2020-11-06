import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import MovieDetail from './components/MovieDetail/MovieDetail';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/:id" component={MovieDetail} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;