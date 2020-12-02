import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { Header, Grid, Divider, Input, Button } from 'semantic-ui-react';
import Loading from '../components/Loading';
import LoginButton from '../components/LoginButton';
import LogOutButton from '../components/LogOutButton';
import SignUpButton from '../components/SignUpButton';
import UserSettingsButton from '../components/UserSettingsButton';
import axios from 'axios'
import './CoronaCast.css';

const Home = (props) => {

  const { isAuthenticated, isLoading, user } = useAuth0();
  const [isUser, setUser] = useState(true);
  const [isAdmin, setAdmin] = useState(false);
  const [checked, setChecked] = useState(false);
  
useEffect(() => {
  if (isAuthenticated && checked === false) {
    axios.get("/api/userData/" + user.name)
        .then(res => {
            if (res.data != null) {
              console.log(res.data);
              setUser(true);}
            else {setUser(false);}})
        .catch(err => console.log(err));
    setChecked(true);
  if (user.name === "alexandermills@ufl.edu" || user.name === "coronacast.dev@gmail.com" || user.name === "antonlivingston@ufl.edu") {
    setAdmin(true);
  }}
}, [checked, isAuthenticated, user]); 

  if (isLoading) return <Loading/>

  return (
    <html>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header className="Title"> CoronaCast </Header>
          <Header classname="Title">{isUser ? null : "We don't seem to have you as a member of CoronaCast, please select User Settings"}</Header>
          <div className="MainBox" style={{ paddingBottom: 40 }}>
            {!isAuthenticated && (<LoginButton />)}
            {!isAuthenticated && (<SignUpButton />)}
            {isAuthenticated && (<LogOutButton />)}
            {isAuthenticated && (<UserSettingsButton />)}
            {isAdmin ? 
            <Button href='/admin' className="AuthButton">Admin Panel</Button>
          : null}
            <Divider style={{marginTop: 30}}></Divider>
            <Header className="InsideText" as="h2">CoronaCast Using Zip Code</Header>
            <Input className="InputText" style={{ width: 360, height: 60 }} placeholder='Coming In Sprint 3'/>
          </div>
        </Grid.Column>
      </Grid>
    </html>
  );
}

export default Home;
