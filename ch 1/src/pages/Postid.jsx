import React from 'react';
import { useParams } from 'react-router-dom';

const Postid = () => {

    // http://localhost:3001/post/laptop/1/
    const { category, id } = useParams();

    return (
        <div>
            <h1>Post with {category}</h1>
            <h1>Post with {id}</h1>
        </div>
    )
}

export default Postid