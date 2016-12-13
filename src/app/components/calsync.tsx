/// <reference path="../../../typings/index.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IndexLink, Link } from 'react-router';

import browserHistory from '../browserHistory';

export class CalSyncApp extends React.Component<{}, {}> {
  constructor() {
    super();
  }

  /**
   * @description
   *
   * Handles the browser back functionality
   * 
   * @returns 
   */
  _navigateBack() {
    browserHistory.goBack();
  }

  render() {
    return (
      <div id="row">
        {this.props.children}
      </div>
    );
  }
}
