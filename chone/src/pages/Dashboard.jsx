import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate();
    // send data to logout
    let data = {
        name: "user"
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={() => {
                navigate("/logout", { state: data })
            }}>Log Out</button>
        </div>
    )
}

export default Dashboard