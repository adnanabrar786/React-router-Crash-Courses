import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from "../pages/About";
import Layout from '../components/Layout';
import Post from '../pages/Post';
import Postlayout from "../components//Postlayout";
import Postdetails from "../pages/Postdetails"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/post" element={<Postlayout />} >
                        <Route index element={<Post />} />
                        <Route path=":category" element={<Postdetails />} />
                    </Route >
                    <Route path="*" element={<h1>Page Not Found 404</h1>} />
                </Route>
            </Routes>
        </BrowserRouter >
    )
}

export default Router