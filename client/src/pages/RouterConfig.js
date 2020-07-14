import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './home/Home';
import UserLandPage from './user-land-page/UserLandPage';

const RoutingConfig = () => (
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/:id' component={UserLandPage} />
    </div>
  </Router>
);

export default RoutingConfig;
