import React, { useState } from 'react';
import { Header, Button, Form, Grid } from 'semantic-ui-react';
import './CoronaCast.css';

const Signup = (props) => {
    const [signUpInfo, setSignUpInfo] = useState({
        fullName: "",
        username: "",
        password: "",
        vPassword:""
    })
    
    const submitSignUpInfo = (e) =>{
        //This is what runs when the user hits submit, e here stands for event. 
        //Notice how all the onChange functions change each variable in the signUpInfo class using setSignUpInfo

        console.log(signUpInfo); //This prints to the webpage console not the VScode one

        //Other logic goes here
    }
    
    return (
        <html>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450, padding: 0 }}>
                    <Header className="Title" textAlign='center'>CoronaCast</Header>
                    <Header className="Title" style={{ fontSize: 36 }}>Welcome to CoronaCast</Header>
                    <div className="MainBox">
                        <Form className="InputBox" onSubmit={submitSignUpInfo} style={{ display: 'inline-block', top: '5vh'}}>
                            <label>Full Name</label>
                            <Form.Input placeholder='Full Name' onChange={e => setSignUpInfo({...signUpInfo, fullName: e.target.value})} />
                            <label>Username</label>
                            <Form.Input icon='user' iconPosition='left' placeholder='Username' onChange={e => setSignUpInfo({...signUpInfo, username: e.target.value})} />
                            <label>Password</label>
                            <Form.Input icon='lock' iconPosition='left' type='password' placeholder='Password' onChange={e => setSignUpInfo({...signUpInfo, password: e.target.value})}/>
                            <label>Retype Password</label>
                            <Form.Input icon='lock' iconPosition='left' type='password' placeholder='Retype-Password' onChange={e => setSignUpInfo({...signUpInfo, vPassword: e.target.value})}/>
                            <Button className="InputButton">Continue</Button>
                        </Form>
                    </div>
                </Grid.Column>
            </Grid>
        </html>

        /*<div className="CoronaCast">
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
        </div>*/
    );
}


export default Signup;
