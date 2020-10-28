import React from 'react';
import './CoronaCast.css';

const Register = (props) => {
    return (
        <div className="CoronaCast">
            <div className="Background">
                <div className="CoronaCast-Title" style={{ top: '11vh' }}>CoronaCast</div>
                <div className="CoronaCast-Title" style={{ position: 'fixed', fontSize: '40px', marginTop: '1.2vh' }}>Welcome to CoronaCast</div>
                <div className="MainBox">
                    <form class="ui form" style={{ marginLeft: '1.8vh' }}>
                        <div style={{ marginTop: '4vh' }} class="field">
                            <label style={{ fontSize: '27px', fontWeight: '350' }}>Email</label>
                            <input style={{ marginTop: '1vh' }} type="text" name="email" placeholder="Email" />
                        </div>
                        <div style={{ marginTop: '4vh' }} class="field">
                            <label style={{ fontSize: '27px', fontWeight: '350' }}>County</label>
                            <input style={{ marginTop: '1vh' }} type="text" name="County" placeholder="County" />
                        </div>
                        <div style={{ marginTop: '5vh' }} class="field">
                            <label style={{ width: '500px', marginLeft: '-5.2vh', fontSize: '27px', fontWeight: '350', lineHeight: '1.25' }}>How often would you like to receive CoronaCast Report Emails</label>
                            <div style={{ marginTop: '1.5vh' }} class="ui selection dropdown">
                                <input type="hidden" name="gender" />
                                <i class="dropdown icon"></i>
                                <div class="default text">I want to receive reports...</div>
                                <div class="menu">
                                    <div class="item" data-value="0">Never</div>
                                    <div class="item" data-value="1">Daily</div>
                                    <div class="item" data-value="2">Weekly</div>
                                    <div class="item" data-value="3">Bi-Monthly</div>
                                    <div class="item" data-value="4">Monthly</div>
                                </div>
                            </div>
                        </div>
                        <button style={{ height: '38px', width: '144px', marginLeft: '23vh', backgroundColor: '#8EBC88', border: '1px solid #51704D', borderRadius: '20px', fontFamily: 'Segoe UI' }}
                            class="ui button" type="submit">Continue</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
