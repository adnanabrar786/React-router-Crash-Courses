import React from 'react'
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            {/* <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/about">About Us</Link></li>
            </ul> */}


            <ul>
                <li><NavLink to="/" style={({ isActive }) => { return { color: isActive ? "red" : " " } }}>Home</NavLink></li>
                <li><NavLink to="/contact" style={({ isActive }) => { return { color: isActive ? "red" : " " } }}>Contact Us</NavLink></li>
                <li><NavLink to="/about" style={({ isActive }) => { return { color: isActive ? "red" : " " } }}>About Us</NavLink></li>
                <li><NavLink to="/post/mobile" style={({ isActive }) => { return { color: isActive ? "red" : " " } }}>Post</NavLink></li>
                <li><NavLink to="/post/laptop/1" style={({ isActive }) => { return { color: isActive ? "red" : " " } }}>Post With ID</NavLink></li>
                <li><NavLink to="/handlesearchparam" style={({ isActive }) => { return { color: isActive ? "red" : " " } }}>use Search Params</NavLink></li>
                <li><NavLink to="/login" style={({ isActive }) => { return { color: isActive ? "red" : " " } }}>Login</NavLink></li>
                <li><NavLink to="/dashboard" style={({ isActive }) => { return { color: isActive ? "red" : " " } }}>Dashboard</NavLink></li>
            </ul>

        </div>
    )
}

export default Navbar