import React, { useEffect, useState } from 'react';
import ThirdBlog from './ThirdBlog';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('Blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data));

    }, [blogs, setBlogs]);
    return (
        <div className='bg-gray-200 '>
            {/* Fast Section start here */}
            <section className="px-5 py-10 mt-32">
                <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
                    <div className="flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3">
                        <div className="flex flex-col space-y-8 md:space-y-12">
                            <div className="flex flex-col space-y-2">
                                <h3 className="flex items-center space-x-2 dark:text-gray-400">
                                    <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
                                    <span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
                                </h3>
                                <p rel="noopener noreferrer" href="#" className="font-serif hover:underline">Donec sed elit quis odio mollis dignissim eget et nulla.</p>
                                <p className="text-xs dark:text-gray-400">47 minutes ago by
                                    <p rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Leroy Jenkins</p>
                                </p>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <h3 className="flex items-center space-x-2 dark:text-gray-400">
                                    <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
                                    <span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
                                </h3>
                                <p rel="noopener noreferrer" href="#" className="font-serif hover:underline">Ut fermentum nunc quis ipsum laoreet condimentum.</p>
                                <p className="text-xs dark:text-gray-400">2 hours ago by
                                    <p rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Leroy Jenkins</p>
                                </p>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <h3 className="flex items-center space-x-2 dark:text-gray-400">
                                    <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
                                    <span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
                                </h3>
                                <p rel="noopener noreferrer" href="#" className="font-serif hover:underline">Nunc nec ipsum lobortis, pulvinar neque sed.</p>
                                <p className="text-xs dark:text-gray-400">4 hours ago by
                                    <p rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Leroy Jenkins</p>
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col w-full space-y-2">
                            <div className="flex w-full h-1 bg-opacity-10 dark:bg-violet-400">
                                <div className="w-1/2 h-full dark:bg-violet-400"></div>
                            </div>
                            <p rel="noopener noreferrer" href="#" className="flex items-center justify-between w-full">
                                <span className="text-xs font-bold tracking-wider uppercase">See more exclusives</span>
                                <svg viewBox="0 0 24 24" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 strokeCurrent dark:text-violet-400">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </p>
                        </div>
                    </div>
                    <div className="relative flex col-span-12 bg-center bg-no-repeat bg-cover dark:bg-gray-300 xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96" style={{ backgroundImage: `url('https://www.pngmart.com/files/8/Building-PNG-Image-Free-Download-1.png')` }} >
                        <span className="absolute px-1 pb-2 text-xs font-bold uppercase border-b-2 left-6 top-6 dark:border-violet-400 dark:text-gray-200">Random Window</span>
                        <p className="flex flex-col items-center justify-end p-6 text-center sm:p-8 group dark:via-transparent flex-grow-1 bg-gradient-to-b dark:from-gray-900 dark:to-gray-900">
                            <span className="flex items-center mb-4 space-x-2 dark:text-violet-400">
                                <span className="relative flex-shrink-0 w-2 h-2 rounded-full dark:bg-violet-400">
                                    <span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping dark:bg-violet-400"></span>
                                </span>
                                <span className="text-sm font-bold">Live</span>
                            </span>
                            <a href="https://www.window-swap.com/Window" className="font-serif text-2xl font-semibold group-hover:underline dark:text-gray-100">Hare you can see windows view of any random house . i thing you want it?</a>
                            {/* <a  href="https://www.window-swap.com/Window" className="font-serif text-2xl font-semibold group-hover:underline dark:text-gray-100">Hare you can see windows view of any random house . i thing you want it?</a> */}
                        </p>
                    </div>
                    <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
                        <div className="mb-8 space-x-5 border-b-2 border-opacity-10 dark:border-violet-400">
                            <button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 dark:border-violet-400">Popular</button>
                            {/* <button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 dark:border-transparent dark:text-gray-400"></button> */}
                        </div>
                        <div className="flex flex-col divide-y divide-gray-700">
                            <div className="flex px-1 py-4">
                                <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://www.pngmart.com/files/1/Building-PNG-Clipart.png" />
                                <div className="flex flex-col flex-grow">
                                    <p rel="noopener noreferrer" href="#" className="font-serif hover:underline">Aenean ac tristique lorem, ut mollis dui.</p>
                                    <p className="mt-auto text-xs dark:text-gray-400">5 minutes ago
                                        <p rel="noopener noreferrer" href="#" className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">Big Sell </p>
                                    </p>
                                </div>
                            </div>
                            <div className="flex px-1 py-4">
                                <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://freepngimg.com/save/26158-apartment-hd/503x405" />
                                <div className="flex flex-col flex-grow">
                                    <p rel="noopener noreferrer" href="#" className="font-serif hover:underline">Nulla consectetur efficitur.</p>
                                    <p className="mt-auto text-xs dark:text-gray-400">14 minutes ago
                                        <p rel="noopener noreferrer" href="#" className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">Professional</p>
                                    </p>
                                </div>
                            </div>
                            <div className="flex px-1 py-4">
                                <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://watermark.lovepik.com/photo/20211126/large/lovepik-building-building-picture_501080336.jpg" />
                                <div className="flex flex-col flex-grow">
                                    <p rel="noopener noreferrer" href="#" className="font-serif hover:underline">Vitae semper augue purus tincidunt libero.</p>
                                    <p className="mt-auto text-xs dark:text-gray-400">22 minutes ago
                                        <p rel="noopener noreferrer" href="#" className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">World Class</p>
                                    </p>
                                </div>
                            </div>
                            <div className="flex px-1 py-4">
                                <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://www.pngmart.com/files/1/Building-PNG-File.png" />
                                <div className="flex flex-col flex-grow">
                                    <p rel="noopener noreferrer" href="#" className="font-serif hover:underline">Suspendisse potenti.</p>
                                    <p className="mt-auto text-xs dark:text-gray-400">37 minutes ago
                                        <p rel="noopener noreferrer" href="#" className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">Business</p>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Fast Section end here */}



            
            {/* Second Section start here */}
            <section className="max-w-screen-xl p-5 mx-auto">
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
                    {/* breakpoint */}
                    {
                        blogs.map(blog => <>
                            <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500" style={{ backgroundImage: `url(${blog.url})` }} >
                                <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                                <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                                    <p rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined">{blog.type}</p>
                                    <div className="flex flex-col justify-start text-center dark:text-gray-100">
                                        <span className="text-3xl font-semibold leading-none tracking-wide">{blog.date}</span>
                                        <span className="leading-none uppercase">{blog.month}</span>
                                    </div>
                                </div>
                                <h2 className="z-10 p-5">
                                    <p rel="noopener noreferrer" href="#" className="font-medium text-md hover:underline dark:text-gray-100">{blog.title}</p>
                                </h2>
                            </div>
                        </>)
                    }


                    {/* <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500" >
                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                        <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                            <p rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined">Health</p>
                            <div className="flex flex-col justify-start text-center dark:text-gray-100">
                                <span className="text-3xl font-semibold leading-none tracking-wide">01</span>
                                <span className="leading-none uppercase">Aug</span>
                            </div>
                        </div>
                        <h2 className="z-10 p-5">
                            <p rel="noopener noreferrer" href="#" className="font-medium text-md hover:underline dark:text-gray-100">Inventore reiciendis aliquam excepturi</p>
                        </h2>
                    </div>
                   
                    <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500" >
                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                        <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                            <p rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined">Science</p>
                            <div className="flex flex-col justify-start text-center dark:text-gray-100">
                                <span className="text-3xl font-semibold leading-none tracking-wide">28</span>
                                <span className="leading-none uppercase">Jul</span>
                            </div>
                        </div>
                        <h2 className="z-10 p-5">
                            <p rel="noopener noreferrer" href="#" className="font-medium text-md hover:underline dark:text-gray-100">Officiis mollitia dignissimos commodi optio vero animi</p>
                        </h2>
                    </div>

                    <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500" >
                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                        <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                            <p rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined">Sports</p>
                            <div className="flex flex-col justify-start text-center dark:text-gray-100">
                                <span className="text-3xl font-semibold leading-none tracking-wide">19</span>
                                <span className="leading-none uppercase">Jul</span>
                            </div>
                        </div>
                        <h2 className="z-10 p-5">
                            <p rel="noopener noreferrer" href="#" className="font-medium text-md hover:underline dark:text-gray-100">Doloribus sit illo necessitatibus architecto exercitationem enim</p>
                        </h2>
                    </div> */}
                </div>
            </section>
            {/* Second Section end here */}





            {/* third Section start here */}
            <ThirdBlog />
            {/* third Section end here */}
        </div>
    );
};

export default Blog;