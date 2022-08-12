import React from 'react';

const Education = () => {
    return (
        <section>
            <h1 className='text-center text-3xl py-3 font-bold border-b-2 border-b-gray-300'>Education</h1>
            <div>
                <div className='grid grid-cols-1 m-5 space-y-3'>
                    <div className='space-y-1'>
                        <h4 className='text-sm font-bold'>Your Education Level</h4>
                        <p>Secendary</p>
                    </div>
                    <div className='space-y-1'>
                        <h4 className='text-sm font-bold'>Degree</h4>
                        <p>HSC</p>
                    </div>
                    <div className='space-y-1'>
                        <h4 className='text-sm font-bold'>Institution Name</h4>
                        <p>SADARPUR GOVT. College</p>
                    </div>
                    <div className='space-y-1'>
                        <h4 className='text-sm font-bold'>Passing Year</h4>
                        <p>2022</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;