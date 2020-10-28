import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Dropdown, Header, Grid, Divider } from 'semantic-ui-react';
import LoginButton from '../components/LoginButton';
import LogOutButton from '../components/LogOutButton';
import SignUpButton from '../components/SignUpButton';
import './CoronaCast.css';

const countyOptions = [
  { key: 'Coming In Sprint 3', text: 'Coming In Sprint 3' }
]

const Home = (props) => {
  const { isAuthenticated } = useAuth0();

  return (
    <html>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 432, padding: 0 }}>
          <Header className="Title"> CoronaCast </Header>
          <div className="MainBox">
            {!isAuthenticated && (<LoginButton />)}
            {isAuthenticated && (<LogOutButton />)}
            <SignUpButton />
            <Divider></Divider>
            <Header className="InsideText" as="h2">Or Look Up A Report Using:</Header>
            <Header className="HeaderText" textAlign='left' style={{ marginLeft: '20px' }}>Zip Code</Header>
            <Dropdown className="InputText" style={{ width: 391, height: 44 }} placeholder='Zip Code' search selection options={countyOptions} />
          </div>
        </Grid.Column>
      </Grid>
    </html>

    /*              
              <div style= {{position: 'absolute', color: '#707070', backgroundColor: '#707070', height: '0.12vh', borderColor: '#707070', width: '175px',  opacity: 0.5, left: 15, marginTop: '7vh'
               }}/> 
                <div className="HeaderText" style= {{fontSize: '40px', marginTop: '5vh'}}>or</div>
              
              <div style= {{position: 'absolute', color: '#707070', backgroundColor: '#707070', height: '0.12vh', borderColor: '#707070', width: '175px', opacity: 0.5, right: 15
               }}/>   
              */
  );
}

export default Home;
