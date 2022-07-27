import React, { useContext } from 'react';
import { DarkModeContext } from '../../App';

const UserData = () => {

    const [darkMode] = useContext(DarkModeContext)

    return (
        <section className='mt-[129px]'>
            <h1 className={`text-4xl text-center my-3 ${darkMode && "text-white"}`}>Welcome To Neighbour Home!</h1>
            <div className='border p-7 rounded-lg cs-card-shadow w-full md:w-2/3 mx-auto my-3'>
                <h1 className={`text-3xl font-medium text-center mb-12 ${darkMode && 'text-white'}`}>Fill Up This Form For Next Step</h1>
                <div>
                    <form>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
                            <div>
                                <label className={`${darkMode && 'text-white'}`} htmlFor="">Name</label>
                                <input type="text" name="name" className="mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className={`${darkMode && 'text-white'}`} htmlFor="">Username</label>
                                <input type="text" name="name" className="mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1" placeholder="username69" />
                            </div>
                            <div>
                                <label className={`${darkMode && 'text-white'}`} htmlFor="">Address</label>
                                <input type="text" name="name" className="mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1" placeholder="Road 12, Mirpur, Dhaka" />
                            </div>
                            <div>
                                <label className={`${darkMode && 'text-white'}`} htmlFor="">Zip/Postal</label>
                                <input type="number" name="number" className="mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1" placeholder="LinkdIne Link" />
                            </div>
                            <div>
                                <label className={`${darkMode && 'text-white'}`} htmlFor="">Phone</label>
                                <input type="number" name="phone" className="mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1" placeholder="+8801XXXXXXXXX" />
                            </div>
                            <div>
                                <label className={`${darkMode && 'text-white'}`} htmlFor="">Country</label>
                                <input type="text" name="country" className="mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1" placeholder="Your Country" />
                            </div>
                            <div>
                                <label className={`${darkMode && 'text-white'}`} htmlFor="">NID</label>
                                <input type="text" name="name" className="mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1" placeholder="Your NID Card Number" />
                            </div>
                            <div>
                                <label className={`${darkMode && 'text-white'}`} htmlFor="">Your Photo</label>
                                <input type="file" name="photo" className="mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1" placeholder="Your Photo" />
                            </div>
                            <div>
                                <label className={`${darkMode && 'text-white'}`} htmlFor="">What Are Your</label>
                                <select defaultValue={'DEFAULT'} className='select mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1'>
                                    <option disabled value='DEFAULT'>Pick your role</option>
                                    <option value={'Engineer'}>Engineer</option>
                                    <option value={'Worker'}>Worker</option>
                                    <option value={'Buyer'}>Buyer</option>
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