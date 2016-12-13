/// <reference path="../../typings/index.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import browserHistory from './browserHistory';

import { CalSyncApp } from './components/calsync';
import { Home } from './views/home';

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={CalSyncApp}>
        <IndexRoute component={Home}/>
      </Route>
    </Router>
  ),
  document.getElementById('calsync')
);