import React from 'react';

const MyProfile = () => {

    const [toogleProfileEdit, setToogleProfileEdit] = React.useState(false);

    return (
        <section className=''>
            <h1 className='text-center text-3xl py-3 font-bold border-b-2 border-b-gray-300'>My Profile</h1>
            <div className='flex md:flex-row flex-col md:p-10 p-4 md:space-x-10'>
                <div>
                    <div className="avatar online">
                        <div className="w-24 md:w-32 rounded-full">
                            <img src="https://placeimg.com/192/192/people" alt='Profile' />
                        </div>
                    </div>
                    {
                        toogleProfileEdit ?
                            <div onClick={() => setToogleProfileEdit(!toogleProfileEdit)} className='my-3 bg-red-600 text-center py-2 rounded-full text-white font-medium cursor-pointer'>
                                <button className='text-sm'> Cancel Edit</button>
                            </div>
                            :
                            <div onClick={() => setToogleProfileEdit(!toogleProfileEdit)} className='my-3 bg-blue-600 text-center py-2 rounded-full text-white font-medium cursor-pointer'>
                                <button className='text-sm'> Edit Profile</button>
                            </div>
                    }


                </div>
                {
                    toogleProfileEdit ?
                        <form>
                            <div className='space-y-2'>
                                <div className='space-y-1'>
                                    <label className='text-sm font-bold'>Enter Your Full Name</label>
                                    <input type="text" placeholder="John Doe" class="input input-bordered w-full max-w-xs" />
                                </div>
                                <div className='space-y-1'>
                                    <label className='text-sm font-bold'>Enter Your Email</label>
                                    <input type="text" placeholder="example@mail.com" class="input input-bordered w-full max-w-xs" />
                                </div>
                                <div className='space-y-1'>
                                    <label className='text-sm font-bold'>Enter Your Phone</label>
                                    <input type="text" placeholder="+8801xxxxxxxxx" class="input input-bordered w-full max-w-xs" />
                                </div>
                                <div className='text-center'>
                                    <input className='bg-green-600 py-2 px-7 rounded-full text-white font-bold cursor-pointer' type="submit" value="Submit" />
                                </div>
                            </div>
                        </form>
                        :
                        <div className='space-y-4'>
                            <div className='space-y-2'>
                                <h2 className='text-sm font-bold'>Full Name</h2>
                                <p>Sadik</p>
                            </div>
                            <div className='space-y-2'>
                                <h2 className='text-sm font-bold'>Email</h2>
                                <p>sadikhossain433@gmail.com</p>
                            </div>
                            <div className='space-y-2'>
                                <h2 className='text-sm font-bold'>Phone</h2>
                                <p>+8801xxxxxxxxx</p>
                            </div>
                        </div>
                }


            </div>
        </section>
    );
};

export default MyProfile;