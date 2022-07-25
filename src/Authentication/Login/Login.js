import React from 'react';
import { BsGoogle, BsFacebook } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section className='mt-[129px]'>
            <div className="bg-white font-family-karla">

                <div className="w-full flex flex-wrap flex-row-reverse">

                    <div className="w-full md:w-1/2 flex flex-col">

                        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                            <p className="text-center text-3xl">Login Here!</p>
                            <form className="flex flex-col pt-3 md:pt-8">
                                <div className="flex flex-col pt-4">
                                    <label htmlFor="email" className="text-lg">Email</label>
                                    <input type="email" id="email" placeholder="your@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>

                                <div className="flex flex-col pt-4">
                                    <label htmlFor="password" className="text-lg">Password</label>
                                    <input type="password" id="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>

                                <input type="submit" value="Login" className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8 cursor-pointer" />
                            </form>
                            <div className='flex'>
                                <div className="w-[40%] flex m-auto border-b-2 border-b-gray-500" />
                                <div>or</div>
                                <div className="w-[40%] flex m-auto border-b-2 border-b-gray-500" />
                            </div>
                            <div className='flex mx-auto space-x-6 pt-2'>
                                <BsGoogle className='border bg-gray-200 p-2 rounded cursor-pointer' size={50} color={'green'} />
                                <BsFacebook className='border bg-gray-200 p-2 rounded cursor-pointer' size={50} color={'blue'} />
                            </div>
                            <div className="text-center py-5">
                                <p>Already have an account? <Link to='/register' className="underline font-semibold">Register here.</Link></p>
                            </div>
                        </div>

                    </div>

                    <div className="w-1/2">
                        <img className="object-cover w-full hidden md:block" src="https://lh3.googleusercontent.com/BLPgeHnmm_jXD9odvEPr6y3-9tBKwfgOXEk7ysvnIPcCbCJ4WtCTfHnvgzqV-fHHrSJhx-ixjfwa2nVpy6TnnX28ErUNU3UtTg=w911" alt="Background" />
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Login;