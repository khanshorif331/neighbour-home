import React from 'react';
import './Loading.css'

const Loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
            </div>
        </div>
    );
};

export default Loading;