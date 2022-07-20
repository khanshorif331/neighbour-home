import React from 'react';

const Contact = () => {
    return (
        <section>
            <form>
                <section className="text-white body-font relative">
                    <div className="container px-5 py-6 mx-auto">
                        <div className="lg:w-2/3 md:w-2/3 mx-auto border p-5 md:px-16 shadow-md rounded">
                            <h2 className='text-center text-4xl font-bold underline underline-offset-8 decoration-black text-black mb-5'>Contact Us</h2>
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 md:w-1/2 w-full">
                                    <div className="relative">
                                        <label htmlFor="name" className="leading-7 text-sm text-black font-medium">Name</label>
                                        <input type="text" id="name" name="name" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 md:w-1/2 w-full">
                                    <div className="relative">
                                        <label htmlFor="email" className="leading-7 text-sm text-black font-medium">Email</label>
                                        <input type="email" id="email" name="email" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="message" className="leading-7 text-sm text-black font-medium">Message</label>
                                        <textarea id="message" name="message" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
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