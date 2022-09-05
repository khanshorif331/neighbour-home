import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';

const MyProfile = () => {

    const [toogleProfileEdit, setToogleProfileEdit] = React.useState(false);
    const [user] = useAuthState(auth)
    const [userData, setUserData] = useState({})
    const {address, country, email, name, phone, photo, role, username, zip} = userData
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm()

    useEffect(() => {
        fetch(`https://neighbour-home--server.herokuapp.com/singleUserByEmail/${user?.email}`)
        .then(res => res.json())
        .then(data => setUserData(data))
    }, [user])

    const handeProfileUpdate = data => {
        // const profileData = {
        //     name: data.name,
        //     phone: data.phone
        // }
        fetch(`https://neighbour-home--server.herokuapp.com/user?email=${user?.email}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: {
                name: data.name,
                phone: data.phone
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        reset()
    }

    return (
        <section className=''>
            <h1 className='text-center text-3xl py-3 font-bold border-b-2 border-b-gray-300'>My Profile</h1>
            <div className='flex md:flex-row flex-col md:p-10 p-4 md:space-x-10'>
                <div>
                    <div className="avatar online">
                        <div className="w-24 md:w-32 rounded-full">
                            <img src={`${photo}`} alt='Profile' />
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
                        <form onSubmit={handleSubmit(handeProfileUpdate)}>
                            <div className='space-y-2'>
                                <div className='space-y-1'>
                                    <label className='text-sm font-bold'>Enter Your Full Name</label>
                                    <input
                                        {...register('name', {
                                            required: {
                                                value: true,
                                                message: 'Name is Required',
                                            },
                                            minLength: {
                                                value: 3,
                                                message: "Minimum 3 Character"
                                            }
                                        })}
                                        type="text" placeholder="John Doe" class="input input-bordered w-full max-w-xs" />
                                    {errors.name?.type === 'required' && (
                                        <p className='text-red-600 text-sm font-semibold'>
                                            {errors.name.message}
                                        </p>
                                    )}
                                    {errors.name?.type === 'minLength' && (
                                        <p className='text-red-600 text-sm font-semibold'>
                                            {errors.name.message}
                                        </p>
                                    )}
                                </div>
                                <div className='space-y-1'>
                                    <label className='text-sm font-bold'>Enter Your Email</label>
                                    <input value={user?.email} type="text" placeholder="example@mail.com" className="input input-bordered w-full max-w-xs" />
                                </div>
                                <div className='space-y-1'>
                                    <label className='text-sm font-bold'>Enter Your Phone</label>
                                    <input
                                        {...register('phone', {
                                            required: {
                                                value: true,
                                                message: 'Phone is Required',
                                            },
                                            minLength: {
                                                value: 5,
                                                message: 'Minimum 5 character need'
                                            }
                                        })}
                                        defaultValue={phone}
                                        type="text" placeholder="+8801xxxxxxxxx" class="input input-bordered w-full max-w-xs" />
                                    {errors.phone?.type === 'required' && (
                                        <p className='text-red-600 text-sm font-semibold'>
                                            {errors.phone.message}
                                        </p>
                                    )}
                                    {errors.phone?.type === 'minLength' && (
                                        <p className='text-red-600 text-sm font-semibold'>
                                            {errors.phone.message}
                                        </p>
                                    )}
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
                                <p>{name}</p>
                            </div>
                            <div className='space-y-2'>
                                <h2 className='text-sm font-bold'>Email</h2>
                                <p>{email}</p>
                            </div>
                            <div className='space-y-2'>
                                <h2 className='text-sm font-bold'>Phone</h2>
                                <p>{phone}</p>
                            </div>
                        </div>
                }


            </div>
        </section>
    );
};

export default MyProfile;