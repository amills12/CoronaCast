import React from 'react';
import './CoronaCast.css';

class Login extends React.Component {

    render() {
        return (
        <div className="CoronaCast">
            <div className="Background">
                <div className="CoronaCast-Title">CoronaCast</div>
                <div className="CoronaCast-Title" style={{position: 'fixed', fontSize: '40px', marginTop: '6vh'}}>Welcome back to CoronaCast</div>
                    <div className="MainBox" style={{height: '334px'}}>
                        <form class="ui form" style = {{marginLeft: '1.8vh'}}>
                            <div style={{marginTop: '4vh'}} class="field">
                                <label style={{fontSize: '27px', fontWeight: '350'}}>Username</label>
                                <input style={{marginTop: '1vh'}} type="text" name="username" placeholder="Username"/>
                            </div>
                            <div style={{marginTop: '4vh'}} class="field">
                                <label style={{fontSize: '27px', fontWeight: '350'}}>Password</label>
                                <input style={{marginTop: '1vh'}} type="password" name="password" placeholder="Password"/>
                            </div>
                            <a href="/" className="BodyText" style={{position: 'fixed', fontSize: '25px', marginTop: '-2vh', marginLeft: '-1.9vh'}}>Forgot Password</a>
                            <button style={{height: '38px', width: '144px', marginLeft: '23vh', backgroundColor: '#8EBC88',  border: '1px solid #51704D', borderRadius: '20px', fontFamily: 'Segoe UI'}} 
                            class="ui button" type="submit">Login</button>
                        </form>
                    </div>
            </div>
        </div>
        );
    }
}

export default Login;