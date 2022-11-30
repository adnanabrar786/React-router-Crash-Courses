import React from 'react';
import { useSearchParams } from 'react-router-dom';

const HandleSearchparam = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    // http://localhost:3001/handlesearchparam/?price=1000
    console.log(searchParams.get('price'));
    // http://localhost:3001/handlesearchparam/?price=199&sort=222
    console.log(searchParams.get('sort'));
    // http://localhost:3001/handlesearchparam/?price=199&sort=222&color=red
    console.log(searchParams.get('color'));

    // function handleSubmit(event) {
    //     event.preventDefault()
    //     const params = serializeFormQuery(event.target)
    //     setSearchParams(params)
    // }

    return (
        <div>
            <h1>use Search Params</h1>
        </div>
    )
}

export default HandleSearchparam;