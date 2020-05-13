import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Scaffold from './components/Scaffold';
import HomePage from '../home/HomePage';

const MainRouter = () => (
  <Scaffold>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  </Scaffold>
);

export default MainRouter;
