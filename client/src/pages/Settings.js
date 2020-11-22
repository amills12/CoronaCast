import React, { useState, useEffect } from 'react';
import { Header, Button, Form, Grid } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import { useAuth0 } from "@auth0/auth0-react"; 
import './CoronaCast.css';


const frequencyOptions = [
    { key: 'never', text: 'Never', value: 'never'}, 
    { key: 'daily', text: 'Daily', value: 'daily'},
    { key: 'weekly', text: 'Weekly', value: 'weekly'},
    { key: 'bimonthly', text: 'Bi-Monthly', value: 'bi-monthly'},
    { key: 'monthly', text: 'Monthly', value: 'monthly'}
  ]


const Settings = (props) => {

    const { user } = useAuth0();
    const [profileInfo, setProfileInfo] = useState([]);
    const [isNewUser, setNewUser] = useState(false);
    const history = useHistory();

    const dropdownSelect = (e, { value }) => setProfileInfo({...profileInfo, frequency: value})

    useEffect(() => {
        axios.get("/api/userData/" + user.name)
            .then(res => {
                if(res.data != null) {
                    setProfileInfo(res.data);
                    setNewUser(false);}
                else {setNewUser(true);}})
            .catch(err => console.log(err));
    }, [user.name]);
    
    const submitProfileInfo = (e) => {
        if (isNewUser === true) {
            axios.post("/api/userData", profileInfo)
                .then((response) => {
                    console.log(response);
                }, (error) => {
                    console.log(error);
                });
        } else {
            axios.put("/api/userData/" + user.name, profileInfo)
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }

        let path = '';
        history.push(path);

        console.log(profileInfo); 
    }
    
    return (    
        <html>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450}}>
                    <Header className="Title" textAlign='center'>CoronaCast</Header>
                    <Header className="Title" style={{ fontSize: 36 }}>Welcome to CoronaCast</Header>
                    <Header classname="Title" >{isNewUser ? 'Please fill in all information to offically join CoronaCast' : ''}</Header>
                    <div className="MainBox" style={{ paddingTop: 40, paddingBottom: 40, paddingLeft: 20, paddingRight: 20}}>
                        <Form className="InputBox" onSubmit={submitProfileInfo} style={{ display: 'inline-block'}}>
                            <Form.Group widths='equal'>
                                <Form.Input fluid label ='First Name' placeholder="First Name" value={profileInfo.first} onChange={e => setProfileInfo({...profileInfo, first: e.target.value})} />
                                <Form.Input fluid label ='Last Name' placeholder="Last Name" value={profileInfo.last} onChange={e => setProfileInfo({...profileInfo, last: e.target.value})} />
                            </Form.Group>
                            <Form.Input fluid label ='Email to Receive Reports' placeholder="Email" value={profileInfo.email} onChange={e => setProfileInfo({...profileInfo, email: e.target.value})} />
                            <Form.Input fluid label ='County' placeholder="County" value={profileInfo.county} onChange={e => setProfileInfo({...profileInfo, county: e.target.value})} />
                            <Form.Input fluid label ='State' placeholder="State" value={profileInfo.state} onChange={e => setProfileInfo({...profileInfo, state: e.target.value})}/>
                            <Form.Dropdown  className="InputText" style={{ width: 391, height: 44 }} fluid label = 'Report Frequency'placeholder="I want to receive reports..." value={profileInfo.frequency} 
                            search selection options={frequencyOptions} onChange={dropdownSelect}/>
                            <Button type="submit" className="InputButton">Save</Button>
                        </Form>
                    </div>
                </Grid.Column>
            </Grid>
        </html>

    );
}


export default Settings;
