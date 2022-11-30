import React from 'react'
import { Outlet } from 'react-router-dom'

const Postlayout = () => {
    return (
        <div>
            <h1>This is Post Layout</h1>
            <Outlet/>
        </div>
    )
}

export default Postlayout