import React, { useContext, useState } from 'react';
import { DarkModeContext } from '../../App';
import { useForm } from 'react-hook-form'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';

const UserData = () => {

    const [darkMode] = useContext(DarkModeContext)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [selectOption, setSelectOption] = useState('')
    const imageStorageKey = '7da2b2086b902054d13e6c94a30f0b6a'
    const [user] = useAuthState(auth)
    const navigate = useNavigate();

    const handleChange = e => {
        setSelectOption(e.target.value);
    }

    const handleDataSubmit = data => {

        const image = data.photo[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}` 
        fetch(url, {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if(result.success) {
                const photo = result.data.display_url
                const userData = {
                    photo: photo,
                    name: data.name,
                    username: data.username,
                    address: data.address,
                    zip: data.zip,
                    phone: data.phone,
                    country: data.country,
                    nid: data.nid,
                    role: selectOption
                }
                // console.log(userData);
                fetch(`https://neighbour-home--server.herokuapp.com/user?email=${user.email}`, {
                    method: "PUT",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                })
                .then(res => res.json())
                .then(updatedData => {
                    console.log(updatedData);
                    if(updatedData.message === 'User data was updated successfully') {
                        // console.log("Thanks For Your Information");
                        toast.success("Thanks For Your Information");
                        navigate("/");

                    }
                    else {
                        console.error("Failed To Submit");

                    }
                })
            }
        })

        // console.log(data, selectOption)
        // reset()
    }

    return (
        <section className='sm:mt-[129px] mt-[80px]'>
            <h1 className={`text-4xl text-center my-3 ${darkMode && "text-white"}`}>Welcome To Neighbour Home!</h1>
            <div className='border p-7 rounded-lg cs-card-shadow w-full md:w-2/3 mx-auto my-3'>
                <h1 className={`text-3xl font-medium text-center mb-12 ${darkMode && 'text-white'}`}>Fill Up This Form For Next Step</h1>
                <div>
                    <form onSubmit={handleSubmit(handleDataSubmit)}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
                            <div>
                                <label className={`${darkMode && 'text-white'}`} htmlFor="">Name</label>
                                <input {...register('name', {
                                    required: {
                                        value: true,
                                        message: "Name is Required"
                                    },
                                    minLength: {
                                        value: 3,
                                        message: "Name Must be 3 character or longer"
                                    }
                                })} type="text" className="mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1" placeholder="John Doe" />
                                <label>
                                    {errors.name?.type === 'required' && <p className='text-red-600 text-sm font-semibold'>{errors.name.message}</p>}
                                    {errors.name?.type === 'minLength' && <p className='text-red-600 text-sm font-semibold'>{errors.name.message}</p>}
                                </label>
                            </div>
                            <div>
                                <label className={`${darkMode && 'text-white'}`} htmlFor="">Username</label>
                                <input {...register('username', {
                                    required: {
                                        value: true,
                                        message: "username is required"
                                    },
                                    minLength: {
                                        value: 5,
                                        message: "Username Must be 5 character or longer"
                                    }
                                })} type="text" className="mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1" placeholder="username69" />
                                <label>
                                    {errors.username?.type === 'required' && <p className='text-red-600 text-sm font-semibold'>{errors.username.message}</p>}
                                    {errors.username?.type === 'minLength' && <p className='text-red-600 text-sm font-semibold'>{errors.username.message}</p>}
                                </label>
                            </div>
                            <div>
                                <label className={`${darkMode && 'text-white'}`} htmlFor="">Address</label>
                                <input {...register('address', {
                                    required: {
                                        value: true,
                                        message: "address is required"
                                    },
                                })} type="text" className="mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1" placeholder="Road 12, Mirpur, Dhaka" />
                                <label>
                                    {errors.address?.type === 'required' && <p className='text-red-600 text-sm font-semibold'>{errors.address.message}</p>}
                                </label>
                            </div>
                            <div>
                                <label className={`${darkMode && 'text-white'}`} htmlFor="">Zip/Postal</label>
                                <input {...register('zip', {
                                    required: {
                                        value: true,
                                        message: "zip code is required"
                                    },
                                })} type="number" className="mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1" placeholder="LinkdIne Link" />
                                <label>
                                    {errors.zip?.type === 'required' && <p className='text-red-600 text-sm font-semibold'>{errors.zip.message}</p>}
                                </label>
                            </div>
                            <div>
                                <label className={`${darkMode && 'text-white'}`} htmlFor="">Phone</label>
                                <input {...register('phone', {
                                    required: {
                                        value: true,
                                        message: "phone is required"
                                    },
                                    minLength: {
                                        value: 5,
                                        message: "Phone Must be 10 character or longer"
                                    }
                                })} type="number" className="mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1" placeholder="+8801XXXXXXXXX" />
                                <label>
                                    {errors.phone?.type === 'required' && <p className='text-red-600 text-sm font-semibold'>{errors.phone.message}</p>}
                                    {errors.phone?.type === 'minLength' && <p className='text-red-600 text-sm font-semibold'>{errors.zip.message}</p>}
                                </label>
                            </div>
                            <div>
                                <label className={`${darkMode && 'text-white'}`} htmlFor="">Country</label>
                                <input {...register('country', {
                                    required: {
                                        value: true,
                                        message: "country is required"
                                    },
                                })} type="text" className="mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1" placeholder="Your Country" />
                                <label>
                                    {errors.country?.type === 'required' && <p className='text-red-600 text-sm font-semibold'>{errors.country.message}</p>}
                                </label>
                            </div>
                            <div>
                                <label className={`${darkMode && 'text-white'}`} htmlFor="">NID</label>
                                <input {...register('nid', {
                                    required: {
                                        value: true,
                                        message: "nid is required"
                                    },
                                    minLength: {
                                        value: 11,
                                        message: "NID Must be 11 character or longer"
                                    }
                                })} type="text" className="mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1" placeholder="Your NID Card Number" />
                                <label>
                                    {errors.nid?.type === 'required' && <p className='text-red-600 text-sm font-semibold'>{errors.nid.message}</p>}
                                    {errors.nid?.type === 'minLength' && <p className='text-red-600 text-sm font-semibold'>{errors.nid.message}</p>}
                                </label>
                            </div>
                            <div>
                                <label className={`${darkMode && 'text-white'}`} htmlFor="">Your Photo</label>
                                <input {...register('photo', {
                                    required: {
                                        value: true,
                                        message: "Photo is required"
                                    },
                                })} type="file" className="mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1" placeholder="Your Photo" />
                                <label>
                                    {errors.photo?.type === 'required' && <p className='text-red-600 text-sm font-semibold'>{errors.photo.message}</p>}
                                </label>
                            </div>
                            <div>
                                <label className={`${darkMode && 'text-white'}`} htmlFor="">What Are Your</label>
                                <select onChange={handleChange} defaultValue={'DEFAULT'} className='select mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1'>
                                    <option disabled value='DEFAULT'>Pick your role</option>
                                    <option value={'Engineer'}>Engineer</option>
                                    <option value={'Worker'}>Worker</option>
                                    <option value={'Seller'}>Seller</option>
                                    <option value={'Guest'}>Guest</option>
                                </select>
                            </div>
                        </div>
                        <div className='text-center'>
                            <input className='bg-sky-600 hover:bg-sky-500 duration-300 p-2 rounded ease-in-out hover:scale-125 text-white mt-9 cursor-pointer' type="submit" value="Submit Now" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default UserData;