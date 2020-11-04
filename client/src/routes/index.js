import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Routes';

import Home from '../pages/Home';
import Settings from '../pages/Settings';
import Main from '../pages/Main';


export default function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Settings" component={Settings} isPrivate />
          <Route path="/Main" component={Main} isPrivate />
          <Route component={Home} />
        </Switch>
      </BrowserRouter>
    );
  } 
