import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Routes';

import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Home from '../pages/Home';

export default function Routes() {
    return (
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/SignUp" component={Signup} />

        <Route path="/Home" component={Home} isPrivate />

        {}
        <Route component={Login} />
      </Switch>
    );
  } 