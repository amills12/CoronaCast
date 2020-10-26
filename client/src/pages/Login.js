import React from 'react';
import { Header, Button, Form, Segment, Grid } from 'semantic-ui-react';
import './CoronaCast.css';

class Login extends React.Component {

    render() {
        return (
            <html>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 500, padding: 0}}>
                        <Header className="Title" >CoronaCast</Header>
                        <Header className="Title" style={{fontSize: 36}}>Welcome back to CoronaCast</Header>
                        <div className="MainBox" style={{height: 290, display: 'inline-block'}}>
                            <Form className="InputBox" style={{display: 'inline-block'}}>
                                <Form.Input style={{marginTop: 40}} icon='user' iconPosition='left' placeholder='Username'/>
                                <Form.Input style={{marginTop: 30}} icon='lock' iconPosition='left' type='password' placeholder='Password' />
                                <a href="/" class="HeaderText" style={{}}>Forgot Password</a>
                                <span style={{width: 86, display: 'inline-block'}}/>
                                <Button className="InputButton">Login</Button>
                            </Form>
                        </div>
                    </Grid.Column>
                </Grid>
            </html>
        );
    }
}

export default Login;