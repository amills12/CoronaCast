import React from 'react';
import './CoronaCast.css';
import './Signup.css';
import SignupContent from "./components/SignupContent"

function Signup() {
    return (
        <div className="CoronaCast-Background">
            <header className="CoronaCast-Title">CoronaCast</header>
            <SignupContent />
        </div>
    );
}

export default Signup;