import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react';
import { Grid, Header, Button, Table, Form, Icon } from 'semantic-ui-react';

const frequencyOptions = [
    { key: 'never', text: 'Never', value: 'never'}, 
    { key: 'daily', text: 'Daily', value: 'daily'},
    { key: 'weekly', text: 'Weekly', value: 'weekly'},
    { key: 'bimonthly', text: 'Bi-Monthly', value: 'bi-monthly'},
    { key: 'monthly', text: 'Monthly', value: 'monthly'}
  ]

const Admin = (props) => {
    const { user } = useAuth0();
    const [serverUsers, setServerUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState([]);
    const [open, setOpen] = useState(false);

    const dropdownSelect = (e, { value }) => setSelectedUser({...selectedUser, frequency: value})

    const openUserEdit = (data) => {
        if (open === true && data === selectedUser)
            setOpen(!open);
        
        if (open === true && data !== selectedUser)
            setSelectedUser(data);

        if (open === false) {
            setSelectedUser(data);
            setOpen(!open);
        }
        
    };

    const editUser = () => {
        setOpen(false);
        axios.put("/api/userData/" + selectedUser.email, selectedUser)
            .then(res => {console.log(res)})
            .catch(err => console.log(err));

    }

    const deleteUser = () => {
        setOpen(false);
        axios.delete("/api/userData/" + selectedUser.email)
            .then(res => {
                console.log(res);
                setSelectedUser(null);})
            .catch(err => console.log(err));

    }
    
    useEffect(() => {
        axios.get("/api/userData")
            .then(res => setServerUsers(res.data))
            .catch(err => console.log(err));

    }, [open]);

    if (user.name === "alexandermills@ufl.edu" || user.name === "coronacast.dev@gmail.com" || user.name === "antonlivingston@ufl.edu") {
        return (
            <html>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{maxWidth: 'fit-content'}}>
                    <div className="MainBox" style={{ padding: 40, margin: 20 }}>
                        <Header> Welcome Admin! </Header>
                            <div style={{ width: 800, height: 300, overflowY: 'scroll' }}>
                        <Table celled striped selectable>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>User</Table.HeaderCell>
                                        <Table.HeaderCell>Email</Table.HeaderCell>
                                        <Table.HeaderCell>County</Table.HeaderCell>
                                        <Table.HeaderCell>State</Table.HeaderCell>
                                        <Table.HeaderCell>Frequency</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                {serverUsers.map(el => (
                                        <Table.Row onClick={() => {
                                            openUserEdit(el)
                                        }} key={el.id}>
                                            <Table.Cell>
                                                <Icon name='user' />{el.first + " " + el.last}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {el.email}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {el.county}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {el.state}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {el.frequency}
                                            </Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                        </Table>
                            </div>
                        <Button href="/" className="InputButton" style={{margin: 10}}>Go Home</Button>
                    </div>
                    { open 
                        ? <div className="MainBox" style={{ padding: 30, margin: 'auto'}}>
                            <Form className="InputBox" style={{}}>
                                <Form.Group widths='equal'>
                                    <Form.Input fluid label='First Name' placeholder="First Name" value={selectedUser.first} 
                                        onChange={e => setSelectedUser({...selectedUser, first: e.target.value})} />
                                    <Form.Input fluid label='Last Name' placeholder="Last Name" value={selectedUser.last}
                                        onChange={e => setSelectedUser({...selectedUser, last: e.target.value})} />
                                </Form.Group>
                                <Form.Input fluid label='Email' placeholder="Email" value={selectedUser.email} 
                                    onChange={e => setSelectedUser({...selectedUser, email: e.target.value})} />
                                <Form.Group widths='equal'>
                                    <Form.Input fluid label='County' placeholder="County" value={selectedUser.county} 
                                        onChange={e => setSelectedUser({...selectedUser, county: e.target.value})} />
                                    <Form.Input fluid label='State' placeholder="State" value={selectedUser.state} 
                                        onChange={e => setSelectedUser({...selectedUser, state: e.target.value})} />
                                </Form.Group>
                                <Form.Dropdown fluid label='Frequency' value={selectedUser.frequency} 
                                        search selection options={frequencyOptions} onChange={dropdownSelect}/>
                                <Button.Group>
                                    <Button onClick={() => {
                                        deleteUser()
                                        }}
                                        negative> Delete </Button>
                                    <Button.Or />
                                    <Button type="submit" onClick={() => {
                                        editUser()}} 
                                        positive> Save </Button>
                                </Button.Group> 
                            </Form>
                        </div> : null }
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
