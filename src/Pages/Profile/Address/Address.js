import React from 'react';

const Address = () => {
    return (
        <section>
            <h1 className='text-center text-3xl py-3 font-bold border-b-2 border-b-gray-300'>My Address</h1>
            <div className='flex md:flex-row flex-col md:p-10 p-4 '>
                <div className='md:pr-28'>
                    <h2 className='font-semibold text-blue-600'>Present Address</h2>
                    <div className='grid lg:grid-cols-2 grid-cols-1 md:mt-5'>
                        <div>
                            <h4 className='text-sm font-bold'>Your County</h4>
                            <p>Bangladesh</p>
                        </div>
                        <div className='lg:pl-10'>
                            <h4 className='text-sm font-bold'>Your Town</h4>
                            <p>Dhaka</p>
                        </div>
                        <div className='md:mt-5'>
                            <h4 className='text-sm font-bold'>Zip Code</h4>
                            <p>7830</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='font-semibold text-blue-600'>Permanent Address</h2>
                    <div className='grid lg:grid-cols-2 grid-cols-1 md:mt-5'>
                        <div>
                            <h4 className='text-sm font-bold'>Your County</h4>
                            <p>Bangladesh</p>
                        </div>
                        <div className='lg:pl-10'>
                            <h4 className='text-sm font-bold'>Your Town</h4>
                            <p>Dhaka</p>
                        </div>
                        <div className='md:mt-5'>
                            <h4 className='text-sm font-bold'>Zip Code</h4>
                            <p>7830</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Address;