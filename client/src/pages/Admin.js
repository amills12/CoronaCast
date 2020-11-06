import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Grid, Header, Button, Label, Table } from 'semantic-ui-react';

const Admin = (props) => {
    const { user } = useAuth0();
    const [hasError, setErrors] = useState(false);
    const [serverUsers, setServerUsers] = useState({});
    var dirName = "http://localhost:5000"

    if (process.env.NODE_ENV === 'production')
    {
        // If we're deployed to heroku
        dirName = "https://coronacast2020.herokuapp.com/"
    }

    async function fetchData() {
        const res = await fetch(dirName + "/api/userData");
        res
            .json()
            .then(res => setServerUsers(res))
            .catch(err => setErrors(err));
    }

    useEffect(() => {
        fetchData();
    });

    if (user.name === "alexandermills@ufl.edu") {
        var result = Object.values(serverUsers);
        return (
            <html>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <div className="MainBox" style={{ padding: 40, margin: 100 }}>
                        <Header> Welcome Admin! </Header>
                            <div style={{ width: 800, height: 300, overflow: 'scroll' }}>
                        <Table celled>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>User Names</Table.HeaderCell>
                                        <Table.HeaderCell>Emails</Table.HeaderCell>
                                        <Table.HeaderCell>State</Table.HeaderCell>
                                        <Table.HeaderCell>County</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                {result.map(el => {
                                    return (
                                        <Table.Row key={el.id}>
                                            <Table.Cell>
                                                <Label>{el.first + " " + el.last}</Label>
                                            </Table.Cell>
                                            <Table.Cell>
                                                <Label>{el.email}</Label>
                                            </Table.Cell>
                                            <Table.Cell>
                                                <Label>{el.state}</Label>
                                            </Table.Cell>
                                            <Table.Cell>
                                                <Label>{el.county}</Label>
                                            </Table.Cell>
                                        </Table.Row>
                                    );
                                })}
                        </Table>
                            </div>
                        <Button href="/" className="InputButton" style={{margin: 10}}>Go Home</Button>
                    </div>
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
