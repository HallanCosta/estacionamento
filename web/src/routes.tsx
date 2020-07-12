import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreateSpace from './pages/CreateSpace';
import DetailCars from './pages/DetailCars';

const Routes = () => {

  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/create-space" component={CreateSpace} />
      <Route path="/detail-cars/:page?" component={DetailCars} />
    </BrowserRouter>
  );
}



export default Routes;