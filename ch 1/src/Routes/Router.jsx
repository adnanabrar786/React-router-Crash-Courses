import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from "../pages/About";
import Navbar from '../components/Navbar';
import Post from '../pages/Post';
import Postid from '../pages/Postid';
import HandleSearchparam from '../pages/HandleSearchparam';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Logout from '../pages/Logout';

const Router = () => {
    let isLogin = true;
    let data = {
        loginMessage: "user not login"
    }

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" exact={true} element={<Home />} />
                <Route path="/contact" exact={true} element={<Contact />} />
                <Route path="/about" exact={true} element={<About />} />
                {/* post page for dynamic */}
                <Route path="/post/:category" exact={true} element={<Post />} />
                <Route path="/post/:category/:id" exact={true} element={<Postid />} />
                <Route path="/handlesearchparam" exact={true} element={<HandleSearchparam />} />
                <Route path="/dashboard" exact={true} element={isLogin ? <Dashboard /> : <Navigate to="/login" replace={true} state={data} />} />
                <Route path="/login" exact={true} element={<Login />} />
                <Route path="/logout" exact={true} element={<Logout />} />
                <Route path="*" exact={true} element={<h1>Page Not Found 404</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router