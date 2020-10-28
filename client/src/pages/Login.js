import React from 'react';
import { Header, Button, Form, Grid } from 'semantic-ui-react';
import './CoronaCast.css';

const Login = (props) => {
    return (
        <html>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 500, padding: 0 }}>
                    <Header className="Title" >CoronaCast</Header>
                    <Header className="Title" style={{ fontSize: 36 }}>Welcome back to CoronaCast</Header>
                    <div className="MainBox" style={{ height: 290, display: 'inline-block', paddingTop: 20 }}>
                        <Form className="InputBox" style={{ display: 'inline-block' }}>
                            <Form.Input fluid label ='Username' icon='user' iconPosition='left' placeholder='Username' />
                            <Form.Input fluid label ='Password' icon='lock' iconPosition='left' type='password' placeholder='Password' />
                            <a href="/" class="HeaderText" style={{}}>Forgot Password</a>
                            <span style={{ width: 86, display: 'inline-block' }} />
                            <Button className="InputButton">Login</Button>
                        </Form>
                    </div>
                </Grid.Column>
            </Grid>
        </html>
    );
}

export default Login;
