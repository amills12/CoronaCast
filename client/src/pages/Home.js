import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { Header, Grid, Divider, Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import Loading from '../components/Loading';
import LoginButton from '../components/LoginButton';
import LogOutButton from '../components/LogOutButton';
import SignUpButton from '../components/SignUpButton';
import UserSettingsButton from '../components/UserSettingsButton';
import axios from 'axios'
import './CoronaCast.css';

const Home = (props) => {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const [isAdmin, setAdmin] = useState(false);
  const [checked, setChecked] = useState(false);
  const history = useHistory();
  
useEffect(() => {
  if (isAuthenticated && checked === false) {
    axios.get("/api/userData/" + user.name)
        .then(res => {
            if (res.data != null) {
              console.log(res.data);
            } else {
              let path = '/settings';
              history.push(path);
            }})
        .catch(err => console.log(err));
    setChecked(true);
  if (user.name === "alexandermills@ufl.edu" || user.name === "coronacast.dev@gmail.com" || user.name === "antonlivingston@ufl.edu") {
    setAdmin(true);
  }
  }
}, [isAuthenticated, checked, user]); 

  if (isLoading) return <Loading/>

  return (
    <html>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header className="Title"> CoronaCast </Header>
          <div className="MainBox" style={{ paddingBottom: 40 }}>
            {!isAuthenticated && (<LoginButton />)}
            {!isAuthenticated && (<SignUpButton />)}
            {isAuthenticated && (<LogOutButton />)}
            {isAuthenticated && (<UserSettingsButton />)}
            {isAdmin ? 
            <Button href='/admin' className="AuthButton">Admin Panel</Button>
          : null}
            <Divider style={{marginTop: 30}}></Divider>
            <Header className="InsideText"><a href='/main'>CoronaCast Web Page Report</a></Header>
          </div>
        </Grid.Column>
      </Grid>
    </html>
  );
}

export default Home;
