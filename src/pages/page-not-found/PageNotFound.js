import React from 'react';
import {useNavigate} from "react-router-dom";

const PageNotFound = () => {
    const navigate = useNavigate()
    setTimeout(() => {
        navigate('/')
    }, 5000);

    return (
        <>
            <h1>PAGE NOT FOUND</h1>
        </>
    );
};

export default PageNotFound;