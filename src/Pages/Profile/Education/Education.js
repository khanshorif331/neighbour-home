import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';

const Education = () => {

    const [toogleEducationEdit, setToogleEducationEdit] = React.useState(false);
    const [user] = useAuthState(auth)
    const [userData, setUserData] = useState({})
    const { address, country, email, name, phone, photo, role, username, zip, educationLVL, degree, institution, passingYear } = userData

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm()

    useEffect(() => {
        fetch(`https://neighbour-home--server.herokuapp.com/singleUserByEmail/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUserData(data)
            })
    }, [user])


    const handleUpdateEducation = data => {
        console.log(data)
        fetch(`https://neighbour-home--server.herokuapp.com/user?email=${user?.email}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: {
                educationLVL: data.educationLVL,
                degree: data.degree,
                institution: data.institution,
                passingYear: data.passingYear,
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }


    return (
        <section>
            <h1 className='text-center text-3xl py-3 font-bold border-b-2 border-b-gray-300'>Education</h1>
            <div>
                {
                    toogleEducationEdit ?

                        <form onSubmit={handleSubmit(handleUpdateEducation)}>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-2 p-4'>
                                <div>
                                    <label className='font-medium'>Edit Education Level</label>
                                    <input {...register('educationLVL', {
                                        required: {
                                            value: true,
                                            message: "Education Level is Required"
                                        },
                                        minLength: {
                                            value: 5,
                                            message: "Minimum 5 Character Needed"
                                        }
                                    })}
                                    defaultValue={educationLVL}
                                        type="text" placeholder="MSC" class="input input-bordered w-full max-w-xs" />
                                    {errors.educationLVL?.type === 'required' && (
                                        <p className='text-red-600 text-sm font-semibold'>
                                            {errors.educationLVL.message}
                                        </p>
                                    )}
                                    {errors.educationLVL?.type === 'minLength' && (
                                        <p className='text-red-600 text-sm font-semibold'>
                                            {errors.educationLVL.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className='font-medium'>Degree</label><br />
                                    <input
                                        {...register('degree', {
                                            required: {
                                                value: true,
                                                message: "Degree Level is Required"
                                            },
                                            minLength: {
                                                value: 3,
                                                message: "Minimum 3 Character Needed"
                                            }
                                        })}
<<<<<<< HEAD
                                        defaultValue={degree}
                                        type="text" placeholder="PHD" class="input input-bordered w-full max-w-xs" />
=======
                                        type="text" placeholder="PHD" className="input input-bordered w-full max-w-xs" />
>>>>>>> 2a2a6939ddc3d123d0f8dc3fea957048a1300bbe
                                    {errors.degree?.type === 'required' && (
                                        <p className='text-red-600 text-sm font-semibold'>
                                            {errors.degree.message}
                                        </p>
                                    )}
                                    {errors.degree?.type === 'minLength' && (
                                        <p className='text-red-600 text-sm font-semibold'>
                                            {errors.degree.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className='font-medium'>Edit Institution Name</label>
                                    <input
                                        {...register('institution', {
                                            required: {
                                                value: true,
                                                message: "Institution is Required"
                                            },
                                            minLength: {
                                                value: 3,
                                                message: "Minimum 3 character Needed"
                                            }
                                        })}
<<<<<<< HEAD
                                        defaultValue={institution}
                                        type="text" placeholder="Dhaka College" class="input input-bordered w-full max-w-xs" />
=======
                                        type="text" placeholder="Dhaka College" className="input input-bordered w-full max-w-xs" />
>>>>>>> 2a2a6939ddc3d123d0f8dc3fea957048a1300bbe
                                    {errors.institution?.type === 'required' && (
                                        <p className='text-red-600 text-sm font-semibold'>
                                            {errors.institution.message}
                                        </p>
                                    )}
                                    {errors.institution?.type === 'minLength' && (
                                        <p className='text-red-600 text-sm font-semibold'>
                                            {errors.institution.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className='font-medium'>Passing Year</label>
                                    <input
                                        {...register('passingYear', {
                                            required: {
                                                value: true,
                                                message: "Passing Year is Required"
                                            },
                                            minLength: {
                                                value: 4,
                                                message: "Minimum 4 Character Needed"
                                            }
                                        })}
                                        defaultValue={passingYear}
                                        type="text" placeholder="XXXX" class="input input-bordered w-full max-w-xs" />
                                    {errors.passingYear?.type === 'required' && (
                                        <p className='text-red-600 text-sm font-semibold'>
                                            {errors.passingYear.message}
                                        </p>
                                    )}
                                    {errors.passingYear?.type === 'minLength' && (
                                        <p className='text-red-600 text-sm font-semibold'>
                                            {errors.passingYear.message}
                                        </p>
                                    )}
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