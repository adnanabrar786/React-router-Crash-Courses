import React from 'react';
import { useParams } from 'react-router-dom';

const Postdetails = () => {
    const {category} = useParams();

    console.log(category);

    return (
        <div>
            This is Post Details
        </div>
    )
}

export default Postdetails
