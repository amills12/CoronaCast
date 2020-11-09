import { useAuth0 } from '@auth0/auth0-react';
import React/*, { useEffect, useState }*/ from 'react';
import { Header, Grid, Divider, Input } from 'semantic-ui-react';
import Loading from '../components/Loading';
import LoginButton from '../components/LoginButton';
import LogOutButton from '../components/LogOutButton';
import SignUpButton from '../components/SignUpButton';
import UserSettingsButton from '../components/UserSettingsButton';
//import axios from 'axios'
import './CoronaCast.css';

const Home = (props) => {

  const { isAuthenticated, isLoading/*, user*/ } = useAuth0();
//  const [profileInfo, setProfileInfo] = useState([]);
  
/* useEffect(() => {
    axios.get("/api/userData/" + user.name)
        .then(res => {
            if(res.data[0] != null) {setProfileInfo(res.data[0])}})
        .catch(err => console.log(err));
}, []); */

  if (isLoading) return <Loading/>
  return (
    <html>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header className="Title"> CoronaCast </Header>
 {/*         {profileInfo.frequency !== "" ? (
             <Header className="Title" style={{ fontSize: '30px' }}> Welcome Back to CoronaCast </Header>
          ) : null}
          {profileInfo.frequency === "" ? (
              <Header className="Title" style={{ fontSize: '30px' }}> Please Configure your settings to sign up for Reports </Header>
          ) : null}  */}
          <div className="MainBox" style={{ paddingBottom: 40 }}>
            {!isAuthenticated && (<LoginButton />)}
            {!isAuthenticated && (<SignUpButton />)}
            {isAuthenticated && (<LogOutButton />)}
            {isAuthenticated && (<UserSettingsButton />)}
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
