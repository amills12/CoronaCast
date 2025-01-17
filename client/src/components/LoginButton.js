import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from 'semantic-ui-react';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <Button onClick={() => loginWithRedirect({ action: 'login' })} className="AuthButton">Login</Button>
    )
}

export default LoginButton
