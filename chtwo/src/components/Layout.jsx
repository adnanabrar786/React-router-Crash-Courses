import React from 'react'
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            {/* <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/about">About Us</Link></li>
            </ul> */}


            <ul>
                <li><NavLink to="/" style={({ isActive }) => { return { color: isActive ? "red" : " " } }}>Home</NavLink></li>
                <li><NavLink to="/about" style={({ isActive }) => { return { color: isActive ? "red" : " " } }}>About Us</NavLink></li>
                <li><NavLink to="/contact" style={({ isActive }) => { return { color: isActive ? "red" : " " } }}>Contact Us</NavLink></li>
                <li><NavLink to="/post" style={({ isActive }) => { return { color: isActive ? "red" : " " } }}>Post</NavLink></li>
                <li><NavLink to="/post/laptop" style={({ isActive }) => { return { color: isActive ? "red" : " " } }}>Post Layout</NavLink></li>
            </ul>
            <Outlet />

        </div>
    )
}

export default Layout;