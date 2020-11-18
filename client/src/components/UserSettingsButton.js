import React from 'react';
import { Button } from 'semantic-ui-react';

const UserSettingsButton = (props) => {
    return (
        <Button href='/settings' className="AuthButton">User Settings</Button>
    )
}

export default UserSettingsButton;
