import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../../Shared/Loading/Loading';
import google from '../../Assest/google.svg';
import facebook from '../../Assest/facebook.svg'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';

const Register = () => {

    const [showPassword, setShowPassword] = React.useState(false);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth)
    const [
        createUserWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [token] = useToken(googleUser || emailUser)
    const navigate = useNavigate()

    useEffect(() => {
        if (token.report === 'inserted') {
            navigate('/user_data')
        } else if (token.report === 'exist') {
            navigate('/')
        }
    }, [token.report, navigate])

    if (googleLoading || emailLoading) {
        return <Loading />
    }

    // if (googleUser || emailUser) {
    //     console.log(googleUser || emailUser);
    // }

    if (googleError || emailError) {
        console.error(googleError || emailError);
    }

    const handleRegister = (data) => {
        console.log(data);
        const email = data.email
        const password = data.password
        createUserWithEmailAndPassword(email, password)
        reset()
    }

    return (
        <section className='sm:mt-[129px] mt-[80px]'>
            <div className="font-family-karla">

                <div className="w-full flex flex-wrap">

                    <div className="w-full md:w-1/2 flex flex-col border-r-2 border-r-gray-500">

                        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                            <p className="text-center text-3xl">Register Now!</p>
                            <form onSubmit={handleSubmit(handleRegister)} className="flex flex-col pt-3 md:pt-8">
                                <div className="flex flex-col pt-4">
                                    <label htmlFor="name" className="text-lg">Name</label>
                                    <input {...register('name', {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        },
                                        minLength: {
                                            value: 3,
                                            message: 'Must be 3 character or longer'
                                        }
                                    })} type='text' id="name" placeholder="John Smith" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                                    <label>
                                        {errors.name?.type === 'required' && <p className='text-red-600 text-sm font-semibold'>{errors.name.message}</p>}
                                        {errors.name?.type === 'minLength' && <p className='text-red-600 text-sm font-semibold'>{errors.name.message}</p>}
                                    </label>
                                </div>

                                <div className="flex flex-col pt-4">
                                    <label htmlFor="email" className="text-lg">Email</label>
                                    <input {...register('email', {
                                        required: {
                                            value: true,
                                            message: "Email is Required"
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: "Provide a valid email"
                                        }
                                    })} type="email" id="email" placeholder="your@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                                    <label>
                                        {errors.email?.type === 'required' && <p className='text-red-600 text-sm font-semibold'>{errors.email.message}</p>}
                                        {errors.email?.type === 'pattern' && <p className='text-red-600 text-sm font-semibold'>{errors.email.message}</p>}
                                    </label>
                                </div>

                                {
                                    showPassword ?
                                        <div className="flex flex-col pt-4 relative">
                                            <label htmlFor="password" className="text-lg">Password</label>
                                            <input {...register('password', {
                                                required: {
                                                    value: true,
                                                    message: 'Password is Required'
                                                },
                                                minLength: {
                                                    value: 6,
                                                    message: 'Must be 6 character or longer'
                                                },
                                                pattern: {
                                                    value: /(?=.*?[A-Z])/,
                                                    message: 'At least One Uppercase'
                                                },
                                            })} type="text" id="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                                            <MdOutlineVisibilityOff onClick={() => setShowPassword(!showPassword)} className="absolute right-0 top-[54px] mr-4 cursor-pointer" size={28} placeholder="show password" />
                                            <label>
                                                {errors.password?.type === 'required' && <p className='text-red-600 text-sm font-semibold'>{errors.password.message}</p>}
                                                {errors.password?.type === 'pattern' && <p className='text-red-600 text-sm font-semibold'>{errors.password.message}</p>}
                                                {errors.password?.type === 'minLength' && <p className='text-red-600 text-sm font-semibold'>{errors.password.message}</p>}
                                            </label>
                                        </div>
                                        :
                                        <div className="flex flex-col pt-4 relative">
                                            <label htmlFor="password" className="text-lg">Password</label>
                                            <input {...register('password', {
                                                required: {
                                                    value: true,
                                                    message: 'Password is Required'
                                                },
                                                minLength: {
                                                    value: 6,
                                                    message: 'Must be 6 character or longer'
                                                },
                                                pattern: {
                                                    value: /(?=.*?[A-Z])/,
                                                    message: 'At least One Uppercase'
                                                },
                                            })} type="password" id="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                                            <MdOutlineVisibility onClick={() => setShowPassword(!showPassword)} className="absolute right-0 top-[54px] mr-4 cursor-pointer" size={28} placeholder="show password" />
                                            <label>
                                                {errors.password?.type === 'required' && <p className='text-red-600 text-sm font-semibold'>{errors.password.message}</p>}
                                                {errors.password?.type === 'pattern' && <p className='text-red-600 text-sm font-semibold'>{errors.password.message}</p>}
                                                {errors.password?.type === 'minLength' && <p className='text-red-600 text-sm font-semibold'>{errors.password.message}</p>}
                                            </label>
                                        </div>
                                }




                                <input type="submit" value="Register" className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8 cursor-pointer" />
                            </form>
                            <div className='flex'>
                                <div className="w-[40%] flex m-auto border-b-2 border-b-gray-500" />
                                <div>or</div>
                                <div className="w-[40%] flex m-auto border-b-2 border-b-gray-500" />
                            </div>
                            <div className='flex flex-col pt-2 space-y-2'>
                                <div onClick={() => signInWithGoogle()} className="flex justify-center items-center cursor-pointer space-x-3 border py-2">
                                    <img className='w-7' src={google} alt="" />
                                    <p className='text-xl font-medium text-black'>Continue With Google</p>
                                </div>
                                <div className="flex justify-center items-center cursor-pointer space-x-3 border py-2">
                                    <img className='w-7' src={facebook} alt="" />
                                    <p className='text-xl font-medium text-black'>Continue With Facebook</p>
                                </div>
                            </div>
                            <div className="text-center py-5">
                                <p>Already have an account? <Link to='/login' className="underline font-semibold">Log in here.</Link></p>
                            </div>
                        </div>

                    </div>

                    <div className="w-1/2">
                        <img className="object-cover w-full hidden md:block" src="https://cdna.artstation.com/p/assets/images/images/027/682/158/original/liz-gross-signup.gif?1592246526" alt="Background" />
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Register;