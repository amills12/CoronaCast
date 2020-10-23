import React from 'react';
import './CoronaCast.css';



class Signup extends React.Component {

    render() {
        return (
        <div className="CoronaCast">
            <div className="Background">
                <div className="CoronaCast-Title" style={{top: '11vh'}}>CoronaCast</div>
                <div className="CoronaCast-Title" style={{position: 'fixed', fontSize: '40px', marginTop: '1.2vh'}}>Welcome to CoronaCast</div>
                    <div className="MainBox">
                        <form class="ui form" style = {{marginLeft: '1.8vh'}}>
                            <div style={{marginTop: '4vh'}} class="field">
                                <label style={{fontSize: '27px', fontWeight: '350'}}>Full Name</label>
                                <input style={{marginTop: '1vh'}} type="text" name="first-name" placeholder="First Name"/>
                            </div>
                            <div style={{marginTop: '3vh'}} class="field">
                                <label style={{fontSize: '27px', fontWeight: '350'}}>Username</label>
                                <input style={{marginTop: '1vh'}} type="text" name="last-name" placeholder="Last Name"/>
                            </div>
                            <div style={{marginTop: '3vh'}} class="field">
                                <label style={{fontSize: '27px', fontWeight: '350'}}>Password</label>
                                <input style={{marginTop: '1vh'}} type="password" name="password" placeholder="Password"/>
                            </div>
                            <div style={{marginTop: '3vh'}} class="field">
                                <label style={{fontSize: '27px', fontWeight: '350'}}>Retype Password</label>
                                <input style={{marginTop: '1vh'}} type="password" name="passwordVerify" placeholder="Password"/>
                            </div>
                            <button style={{height: '38px', width: '144px', marginLeft: '23vh', backgroundColor: '#8EBC88',  border: '1px solid #51704D', borderRadius: '20px', fontFamily: 'Segoe UI'}} 
                            class="ui button" type="submit">Continue</button>
                        </form>
                    </div>
            </div>
        </div>
        );
    }
}


export default Signup;