import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Routes';

import Home from '../pages/Home';
import Settings from '../pages/Settings';
import Main from '../pages/Main';
import Admin from '../pages/Admin';
import PrivateRoute from '../components/PrivateRoute';


export default function Routes() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <PrivateRoute path="/Settings" component={Settings} />
        <PrivateRoute path="/Admin" component={Admin}/>
        <PrivateRoute path="/Main" component={Main} />
        <Route component={Home} />
      </Switch>
    );
  } 
