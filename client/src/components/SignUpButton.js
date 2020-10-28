import React from 'react';
import { useAuth0 } from '@auth0/auth0-react'

const SignUpButton = (props) => {
    const { loginWithRedirect } = useAuth0();
    return (
        <a onClick={() => loginWithRedirect({ action: 'signUp' })} class="ui button">Sign Up</a>
    )
}

export default SignUpButton;
