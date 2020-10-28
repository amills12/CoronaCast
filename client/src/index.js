import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CoronaCast from './CoronaCast';
import * as serviceWorker from './serviceWorker';
import * as authConfig from './config/AuthConfig';
import 'semantic-ui-css/semantic.min.css';
import { Auth0Provider } from '@auth0/auth0-react';

//Auth0 Client ID
const domain = authConfig.domain;
const clientId = authConfig.clientID;

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}>
    <React.StrictMode>
      <CoronaCast />
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
