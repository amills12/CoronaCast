import React from 'react';
import './CoronaCast.css';  

class Home extends React.Component {

  render() {
    return (
      <div className="CoronaCast">
        <div className="Background">
          <div className="CoronaCast-Title">
            CoronaCast
            <div className="MainBox">

              <a href="/login" style= {{marginTop: '6vh', fontSize: '35px', fontWeight: '400'}} class ="ui button">Login</a>
              <a href="/signup" style= {{marginTop: '6vh', fontSize: '35px', fontWeight: '400'}} class ="ui button">Sign Up</a>

              
                <div style= {{position: 'absolute', color: '#707070', backgroundColor: '#707070', height: '0.12vh', borderColor: '#707070', width: '175px',  opacity: 0.5, left: 15, marginTop: '7vh'
                 }}/> 
                  <div className="HeaderText" style= {{fontSize: '40px', marginTop: '5vh'}}>or</div>
                
                <div style= {{position: 'absolute', color: '#707070', backgroundColor: '#707070', height: '0.12vh', borderColor: '#707070', width: '175px', opacity: 0.5, right: 15
                 }}/>
            
                <div className="HeaderText" style= {{textAlign: 'left', marginTop: '3vh', marginLeft: '2vh'}}>County</div>
                  <div style={{marginTop: '2.7vh'}} class="ui input">
                    <input type="text" placeholder="Search County"></input>
                  </div>             
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
