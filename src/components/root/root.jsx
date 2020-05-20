import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import LoggedInRoute from 'components/logged_in_route';
import Login from 'components/login';
import Dashboard from 'components/dashboard';
import Blacklist from 'components/blacklist_page'


export default class Root extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/blacklist" component={Blacklist} />
        <Redirect to="/login" />
      </Switch>
    );
  }
}
