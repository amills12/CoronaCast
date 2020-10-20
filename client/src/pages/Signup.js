import React from 'react';
import './CoronaCast.css';
import './Signup.css';

function Signup() {
    return (
        <div className="CoronaCast">
            <div className="Background">
                <div className="CoronaCast-Title">CoronaCast</div>
                <div className="CoronaCast-Title" style={{position: 'fixed', fontSize: '40px', marginTop: '5vh'}}>Welcome to CoronaCast</div>
            </div>
        </div>
    );
}

export default Signup;