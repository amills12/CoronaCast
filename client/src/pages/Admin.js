import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Grid, Header, Button } from 'semantic-ui-react';

const Admin = (props) => {
    const { user } = useAuth0();

    if (user.name === "alexandermills@ufl.edu") {
        return (
            <html>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ align: 'center', maxWidth: 400 }}>
                        <div className="MainBox" style={{ padding: 40 }}>
                            <Header> Welcome Admin! </Header>
                            <p>Wait a second, you're supposed to be here!</p>
                            <Button href="/" className="InputButton">Go Home</Button>
                        </div>
                    </Grid.Column>
                </Grid>
            </html>
        );
    }

    return (
        <html>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ align: 'center', maxWidth: 400 }}>
                    <div className="MainBox" style={{ padding: 40 }}>
                        <Header> Top Secret Page: </Header>
                        <p>Wait a second, you're not supposed to be here!</p>
                        <Button href="/" className="InputButton">Go Home</Button>
                    </div>
                </Grid.Column>
            </Grid>
        </html>
    );
}

export default Admin;
