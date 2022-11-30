import React from 'react';
import { useLocation } from 'react-router-dom';

const Login = () => {
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
