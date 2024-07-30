import React from 'react';
import "./Loader.css"
import { CircularProgress } from '@mui/material';

const Loader = () => {
    return (
        <div className='loader-container'>
            <CircularProgress />
        </div>
    );
}

export default Loader;
