import React from "react"

function LoginContent() {
    return (
        <header className="Login">
            <h1 className="HeaderText">Sign up for Newsletter / Login</h1>
            <h2 className="BodyText">Full Name</h2>
            <h3 className="BodyText">Email</h3>
            <h4 className="HeaderText">
                <hr style= {{position: 'absolute',
                color: '#707070',
                backgroundColor: '#707070',
                height: 0.05,
                borderColor: '#707070',
                width: '175px',
                opacity: 0.5,
                left: 15,
                marginTop: '6%',
                 }}/>
                or
                <hr style= {{position: 'absolute',
                color: '#707070',
                backgroundColor: '#707070',
                height: 0.05,
                borderColor: '#707070',
                width: '175px',
                opacity: 0.5,
                right: 15,
                marginTop: '-3%'
                 }}/>
            </h4>
            <h5 className="BodyText-ZIP">ZIP Code</h5>
        </header>
    )
}


export default LoginContent