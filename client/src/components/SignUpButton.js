import React from 'react';
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from 'semantic-ui-react';

const SignUpButton = (props) => {
    const { loginWithRedirect } = useAuth0();
    return (
        <Button onClick={() => loginWithRedirect({ action: 'signup' })} className="AuthButton">Sign Up</Button>
    )
}

export default SignUpButton;
