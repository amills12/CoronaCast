import React from 'react';
import { Dropdown, Header, Grid, Divider } from 'semantic-ui-react';
import './CoronaCast.css';  

const countyOptions = [
  {key: 'Sprint 3', text: 'Sprint 3'}
]

class Home extends React.Component {

  render() {
    return (
      <html>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 432, padding: 0}}>
              <Header className="Title"> CoronaCast </Header>
                <div className="MainBox">
                  <a href="/login" class ="ui button">Login</a>
                  <a href="/signup" class ="ui button">Sign Up</a>
                  <Divider style={{backgroundColor: '#707070'}}/>
                  <Header className="HeaderText" textAlign= 'left' style={{marginLeft: '20px'}}>County</Header>
                  <Dropdown className="InputText" style={{width: 391, height: 44}} placeholder='County' search selection options={countyOptions} />
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
}

export default Home;
