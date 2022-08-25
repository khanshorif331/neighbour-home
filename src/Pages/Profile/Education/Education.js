import React from 'react';

const Education = () => {

    const [toogleEducationEdit, setToogleEducationEdit] = React.useState(false);

    return (
        <section>
            <h1 className='text-center text-3xl py-3 font-bold border-b-2 border-b-gray-300'>Education</h1>
            <div>
                {
                    toogleEducationEdit ?

                        <form>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-2 p-4'>
                                <div>
                                    <label className='font-medium'>Edit Education Level</label>
                                    <input type="text" placeholder="MSC" class="input input-bordered w-full max-w-xs" />
                                </div>
                                <div>
                                    <label className='font-medium'>Degree</label><br />
                                    <input type="text" placeholder="PHD" class="input input-bordered w-full max-w-xs" />
                                </div>
                                <div>
                                    <label className='font-medium'>Edit Institution Name</label>
                                    <input type="text" placeholder="Dhaka College" class="input input-bordered w-full max-w-xs" />
                                </div>
                                <div>
                                    <label className='font-medium'>Passing Year</label>
                                    <input type="text" placeholder="XXXX" class="input input-bordered w-full max-w-xs" />
                                </div>
                            </div>
                            <div className=' ml-4 mb-1'>
                                <button className='bg-green-600 font-semibold py-2 px-5 text-white rounded-full'>Update</button>
                            </div>
                        </form>
                        :

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
                }
                {
                    toogleEducationEdit ?
                        <div className=''>
                            <button onClick={() => setToogleEducationEdit(!toogleEducationEdit)} className='text-sm bg-red-600   text-center px-5 py-2 rounded-full text-white font-medium my-3 cursor-pointer ml-4'> Cancel Edit</button>
                        </div>
                        :
                        <div className=''>
                            <button onClick={() => setToogleEducationEdit(!toogleEducationEdit)} className='text-sm bg-blue-600   text-center px-5 py-2 rounded-full text-white font-medium my-3 cursor-pointer ml-4'> Edit Education</button>
                        </div>
                }
            </div>
        </section>
    );
};

export default Education;