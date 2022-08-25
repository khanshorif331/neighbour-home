import React from 'react';
import './Loading.css'

const Loading = () => {
    return (
        <div className='min-h-screen  flex justify-center items-center '>
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
        </div>
    );
};

export default Loading;