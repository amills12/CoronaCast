import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from 'semantic-ui-react';

const LogOutButton = () => {
    const { logout } = useAuth0();
    
    return (
        <Button onClick={() => logout()} className="AuthButton">Logout</Button>
    )
}

export default LogOutButton
