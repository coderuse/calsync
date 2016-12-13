/// <reference path="../../../typings/index.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import browserHistory from '../browserHistory';

export interface IHomeState {
  
}; 

export class Home extends React.Component<{}, IHomeState> {
  constructor() {
    super(); 
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-offset-3 text-center">
          <h1>Working!!!</h1>
        </div>
      </div>
    );
  }
}