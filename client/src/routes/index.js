import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Routes';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Main from '../pages/Main';
import Register from '../pages/Register';
import Admin from '../pages/Admin';
import PrivateRoute from '../components/PrivateRoute';


export default function Routes() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Login" component={Login} />
        <Route path="/SignUp" component={Signup} />
        <Route path="/Register" component={Register}/>
        <PrivateRoute path="/Admin" component={Admin}/>
        <Route path="/Main" component={Main} isPrivate />
        <Route component={Home} />
      </Switch>
    );
  } 
