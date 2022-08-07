import React, { useContext, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { DarkModeContext } from '../../../App';
import contact from '../../../Assest/Contact.gif';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
    const [darkMode] = useContext(DarkModeContext)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const form = useRef()

    const sendEmail = (data) => {
        // console.log(data)
        // let emailData = {
        //     email: data.email,
        //     message: data.message,
        //     name: data.name
        // }
        // console.log(emailData);
        emailjs.sendForm('endgame_project', 'endgame_project', form.current, 'izhjd_XATNZhThYrx')
            .then((res) => {
                console.log(res)
                if(res.status === 200) {
                    toast.success("Message sent successfully", {id: 'success'})
                    reset()
                }
            }, (err) => {
                toast.error("Message not sent", {id: 'error'})
            })
    }

    return (
        <section className='flex justify-center items-center'>
            <div className='w-[60%] px-3 hidden md:block'>
                <img className='w-full' src={contact} alt="" />
            </div>
            <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                <section className="text-white body-font relative md:px-5">
                    <div className="">
                        <div className="w-full mx-auto border px-5 py-12 md:px-16 shadow-md  rounded">
                            {/* <h2 className='text-center text-4xl font-bold underline underline-offset-8 decoration-black text-black mb-5'>Contact Us</h2> */}
                            <h2 className={`${darkMode ? "text-white" : "text-black"}  uppercase text-3xl font-bold text-center`}>
                                Contact Us
                            </h2>
                            <div className="flex justify-center mb-10">
                                <div className=" rounded-md w-40 h-1 bg-[#0D9488]"></div>
                                <div className=" rounded-md w-4 h-1 mx-2 bg-[#0D9488]"></div>
                                <div className=" rounded-md w-2 h-1 bg-[#0D9488]"></div>
                            </div>
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 md:w-1/2 w-full">
                                    <div className="relative">
                                        <label htmlFor="name" className={`${darkMode ? "text-white" : "text-black"}  leading-7 text-sm  font-medium`}>Name</label>
                                        <input {...register('name', {
                                            required: {
                                                value: true,
                                                message: 'Name is required'
                                            },
                                            minLength: {
                                                value: 3,
                                                message: 'Name must be at least 3 characters'
                                            }
                                        })} type="text" id="name" name="name" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                    <label>
                                        {errors.name?.type === 'required' && <p className='text-red-600 text-sm font-semibold'>{errors.name.message}</p>}
                                        {errors.name?.type === 'minLength' && <p className='text-red-600 text-sm font-semibold'>{errors.name.message}</p>}
                                    </label>
                                </div>
                                <div className="p-2 md:w-1/2 w-full">
                                    <div className="relative">
                                        <label htmlFor="email" className={`${darkMode ? "text-white" : "text-black"}  leading-7 text-sm  font-medium`}>Email</label>
                                        <input {...register('email', {
                                            required: {
                                                value: true,
                                                message: 'Email is required'
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Invalid email address'
                                            }
                                        })} type="email" id="email" name="email" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                    <label>
                                        {errors.email?.type === 'required' && <p className='text-red-600 text-sm font-semibold'>{errors.email.message}</p>}
                                        {errors.email?.type === 'pattern' && <p className='text-red-600 text-sm font-semibold'>{errors.email.message}</p>}
                                    </label>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="message" className={`${darkMode ? "text-white" : "text-black"}  leading-7 text-sm  font-medium`}>Message</label>
                                        <textarea {...register('message', {
                                            required: {
                                                value: true,
                                                message: 'Message is required'
                                            },
                                            minLength: {
                                                value: 10,
                                                message: 'Message must be at least 10 characters'
                                            }
                                        })} id="message" name="message" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                    <label>
                                        {errors.message?.type === 'required' && <p className='text-red-600 text-sm font-semibold'>{errors.message.message}</p>}
                                        {errors.message?.type === 'minLength' && <p className='text-red-600 text-sm font-semibold'>{errors.message.message}</p>}
                                    </label>
                                </div>
                                <div className="p-2 w-full">
                                    <button type='submit' className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </section>
    );
};

export default Contact;