import React, { useState } from 'react';
import { Header, Button, Form, Grid } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react"; 
import './CoronaCast.css';


const frequencyOptions = [
    { key: 'never', text: 'Never', value: 'never'}, 
    { key: 'daily', text: 'Daily', value: 'daily'},
    { key: 'weekly', text: 'Weekly', value: 'weekly'},
    { key: 'bimonthly', text: 'Bi-Monthly', value: 'bimonthly'},
    { key: 'monthly', text: 'Monthly', value: 'monthly'}
  ]


const Settings = (props) => {

    const {isAuthenticated} = useAuth0();
    const history = useHistory();

    const [signUpInfo, setSignUpInfo] = useState({
        firstName: "",
        lastName: "",
        county: "",
        state: "",
        reportFreq: ""
    })
    
    const submitSignUpInfo = (e) => {
        //This is what runs when the user hits submit, e here stands for event. 
        //Notice how all the onChange functions change each variable in the signUpInfo class using setSignUpInfo

        console.log(signUpInfo); //This prints to the webpage console not the VScode one
        let path = '/';
        history.push(path);
        //Other logic goes here
    }
    
    return (
        isAuthenticated && (
        <html>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450}}>
                    <Header className="Title" textAlign='center'>CoronaCast</Header>
                    <Header className="Title" style={{ fontSize: 36 }}>Welcome to CoronaCast</Header>
                    <div className="MainBox" style={{ paddingTop: 40, paddingBottom: 40, paddingLeft: 20, paddingRight: 20}}>
                        <Form className="InputBox" onSubmit={submitSignUpInfo} style={{ display: 'inline-block'}}>
                            <Form.Group widths='equal'>
                                <Form.Input fluid label ='First Name' placeholder='First Name' onChange={e => setSignUpInfo({...signUpInfo, firstName: e.target.value})} />
                                <Form.Input fluid label ='Last Name' placeholder='Last Name' onChange={e => setSignUpInfo({...signUpInfo, lastName: e.target.value})} />
                            </Form.Group>
                            <Form.Input fluid label ='County' placeholder='County' onChange={e => setSignUpInfo({...signUpInfo, county: e.target.value})} />
                            <Form.Input fluid label ='State' placeholder='State' onChange={e => setSignUpInfo({...signUpInfo, state: e.target.value})}/>
                            <Form.Dropdown  className="InputText" style={{ width: 391, height: 44 }} fluid label = 'Report Frequency'placeholder='I would like to receive reports...' 
                            search selection options={frequencyOptions} onChange={e => setSignUpInfo({...signUpInfo, reportFreq: e.target.textContent})}/>
                            <Button type="submit" className="InputButton">Save</Button>
                        </Form>
                    </div>
                </Grid.Column>
            </Grid>
        </html>

    ));
}


export default Settings;
