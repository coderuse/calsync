/// <reference path="../../../typings/index.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import browserHistory from '../browserHistory';

export interface IHomeState {
  primaryEmail?: string,
  accounts?: Array<any>
}; 

export class Home extends React.Component<{}, IHomeState> {
  constructor() {
    super();

    this.state = {
      accounts: []
    }; 
  }

  addNewAccount() {
    $.ajax({
      type: 'GET',
      url: '/api/getAuthUrl'
    }).done(function(data) {
      var accounts = this.state.accounts;
      accounts.push({
        authUrl: data.authUrl
      });
      this.setState({
        accounts: accounts
      });
    }.bind(this));
  }

  setPrimaryEmail(evt) {
    this.setState({
      primaryEmail: evt.target.value
    });
  }

  render() {
    return (
      <div className="row">
        <button className="btn btn-default new-account" onClick={this.addNewAccount}>Add new account</button>
        <h1>Register new calendars:</h1>
        <form className="form-horizontal">
          <div class="form-group">
            <label class="col-sm-2 control-label">Primary Email:</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" required placeholder="Email" onChange={this.setPrimaryEmail} />
            </div>
          </div>
          {this.state.accounts.map(function(a, i){
            return (
                <div className="form-group">
                  <span className="col-sm-12"><a href={a.authUrl} target="_blank" /></span>
                  <label className="col-sm-2 control-label">Auth Code:</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" placeholder="Email" onChange={this.setAuthCode.bind(this, i)}/>
                  </div>
                  <div className="col-sm-2">
                    <button className="btn btn-default">Fetch Calendars</button>
                  </div>
                </div>
              );
          }.bind(this))}
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default">Register</button>
            </div>
          </div>
        </form> 
      </div>
    );
  }
}