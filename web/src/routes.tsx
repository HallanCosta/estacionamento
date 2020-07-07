import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreateSpace from './pages/CreateSpace';
import DetailCars from './pages/DetailCars';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={CreateSpace} path="/create-space" />
      <Route component={DetailCars} path="/detail-cars" />
    </BrowserRouter>
  );
}

export default Routes;