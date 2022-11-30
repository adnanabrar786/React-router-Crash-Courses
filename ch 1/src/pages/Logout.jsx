import React from 'react';
import { useLocation } from 'react-router-dom';

const Logout = () => {

    const location = useLocation()
    console.log(location.state.name);

    return (
        <div>
            <h5>Logout</h5>
            <h2>{location.state.name} is Log Out !!!!!</h2>
        </div>
    )
}

export default Logout
