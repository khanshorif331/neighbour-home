import React from 'react';

const Address = () => {

    const [toogleAddressEdit, setToogleAddressEdit] = React.useState(false);

    return (
        <section>
            <h1 className='text-center text-3xl py-3 font-bold border-b-2 border-b-gray-300'>My Address</h1>

            {
                toogleAddressEdit ?
                    <form>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 p-4'>
                            <div>
                                <label className='font-medium'>Your Current Country</label>
                                <input type="text" placeholder="Bangladesh" class="input input-bordered w-full max-w-xs" />
                            </div>
                            <div>
                                <label className='font-medium'>Your Current Town</label>
                                <input type="text" placeholder="Dhaka" class="input input-bordered w-full max-w-xs" />
                            </div>
                            <div>
                                <label className='font-medium'>Your Current Zip Code</label>
                                <input type="text" placeholder="64611" class="input input-bordered w-full max-w-xs" />
                            </div>
                            <div>
                                <label className='font-medium'>Your Permanent Country</label>
                                <input type="text" placeholder="USA" class="input input-bordered w-full max-w-xs" />
                            </div>
                            <div>
                                <label className='font-medium'>Your Permanent Town</label>
                                <input type="text" placeholder="New York" class="input input-bordered w-full max-w-xs" />
                            </div>
                            <div>
                                <label className='font-medium'>Your Permanent Zip</label>
                                <input type="text" placeholder="75482" class="input input-bordered w-full max-w-xs" />
                            </div>
                        </div>
                        <div className='text-center mb-1'>
                            <button className='bg-green-600 font-semibold py-2 px-5 text-white rounded-full'>Update</button>
                        </div>
                    </form>
                    :
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
            }

            {
                toogleAddressEdit ?
                    <div className='text-center'>
                        <button onClick={() => setToogleAddressEdit(!toogleAddressEdit)} className='bg-red-600 font-semibold py-2 px-5 text-white rounded-full'>Cancel Edit</button>
                    </div>
                    :
                    <div className='text-center'>
                        <button onClick={() => setToogleAddressEdit(!toogleAddressEdit)} className='bg-blue-600 font-semibold py-2 px-5 text-white rounded-full'>Edit Address</button>
                    </div>
            }
        </section>
    );
};

export default Address;