import React from 'react';
import { useLocation } from 'react-router-dom';

const Login = () => {
     // fetch data in Router.js 
    const location = useLocation();
    console.log(location.state.loginMessage);

    return (
        <div>
            <h1>Login</h1>
            <h4>{location.state.loginMessage}</h4>
        </div>
    )
}

export default Login
