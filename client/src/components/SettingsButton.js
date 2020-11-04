import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const SettingsButton = () => {
    
    return (
        <Link style={{color: 'inherit', textDecoration: 'none'}} to='/settings'><Button className="AuthButton">User Settings</Button></Link>
    )
}

export default SettingsButton;