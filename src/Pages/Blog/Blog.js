import React from 'react';
import ThirdBlog from './ThirdBlog';

const Blog = () => {
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
                                <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Donec sed elit quis odio mollis dignissim eget et nulla.</a>
                                <p className="text-xs dark:text-gray-400">47 minutes ago by
                                    <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Leroy Jenkins</a>
                                </p>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <h3 className="flex items-center space-x-2 dark:text-gray-400">
                                    <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
                                    <span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
                                </h3>
                                <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Ut fermentum nunc quis ipsum laoreet condimentum.</a>
                                <p className="text-xs dark:text-gray-400">2 hours ago by
                                    <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Leroy Jenkins</a>
                                </p>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <h3 className="flex items-center space-x-2 dark:text-gray-400">
                                    <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
                                    <span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
                                </h3>
                                <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Nunc nec ipsum lobortis, pulvinar neque sed.</a>
                                <p className="text-xs dark:text-gray-400">4 hours ago by
                                    <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Leroy Jenkins</a>
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col w-full space-y-2">
                            <div className="flex w-full h-1 bg-opacity-10 dark:bg-violet-400">
                                <div className="w-1/2 h-full dark:bg-violet-400"></div>
                            </div>
                            <a rel="noopener noreferrer" href="#" className="flex items-center justify-between w-full">
                                <span className="text-xs font-bold tracking-wider uppercase">See more exclusives</span>
                                <svg viewBox="0 0 24 24" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 strokeCurrent dark:text-violet-400">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="relative flex col-span-12 bg-center bg-no-repeat bg-cover dark:bg-gray-500 xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96" >
                        <span className="absolute px-1 pb-2 text-xs font-bold uppercase border-b-2 left-6 top-6 dark:border-violet-400 dark:text-gray-100">paris, france</span>
                        <a className="flex flex-col items-center justify-end p-6 text-center sm:p-8 group dark:via-transparent flex-grow-1 bg-gradient-to-b dark:from-gray-900 dark:to-gray-900">
                            <span className="flex items-center mb-4 space-x-2 dark:text-violet-400">
                                <span className="relative flex-shrink-0 w-2 h-2 rounded-full dark:bg-violet-400">
                                    <span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping dark:bg-violet-400"></span>
                                </span>
                                <span className="text-sm font-bold">Live</span>
                            </span>
                            <h1 rel="noopener noreferrer" href="#" className="font-serif text-2xl font-semibold group-hover:underline dark:text-gray-100">Morbi mattis justo est, ac consectetur dui eleifend vitae. Donec venenatis?</h1>
                        </a>
                    </div>
                    <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
                        <div className="mb-8 space-x-5 border-b-2 border-opacity-10 dark:border-violet-400">
                            <button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 dark:border-violet-400">Latest</button>
                            <button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 dark:border-transparent dark:text-gray-400">Popular</button>
                        </div>
                        <div className="flex flex-col divide-y divide-gray-700">
                            <div className="flex px-1 py-4">
                                <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://source.unsplash.com/random/244x324" />
                                <div className="flex flex-col flex-grow">
                                    <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Aenean ac tristique lorem, ut mollis dui.</a>
                                    <p className="mt-auto text-xs dark:text-gray-400">5 minutes ago
                                        <a rel="noopener noreferrer" href="#" className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">Politics</a>
                                    </p>
                                </div>
                            </div>
                            <div className="flex px-1 py-4">
                                <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://source.unsplash.com/random/245x325" />
                                <div className="flex flex-col flex-grow">
                                    <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Nulla consectetur efficitur.</a>
                                    <p className="mt-auto text-xs dark:text-gray-400">14 minutes ago
                                        <a rel="noopener noreferrer" href="#" className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">Sports</a>
                                    </p>
                                </div>
                            </div>
                            <div className="flex px-1 py-4">
                                <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://source.unsplash.com/random/246x326" />
                                <div className="flex flex-col flex-grow">
                                    <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Vitae semper augue purus tincidunt libero.</a>
                                    <p className="mt-auto text-xs dark:text-gray-400">22 minutes ago
                                        <a rel="noopener noreferrer" href="#" className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">World</a>
                                    </p>
                                </div>
                            </div>
                            <div className="flex px-1 py-4">
                                <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://source.unsplash.com/random/247x327" />
                                <div className="flex flex-col flex-grow">
                                    <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Suspendisse potenti.</a>
                                    <p className="mt-auto text-xs dark:text-gray-400">37 minutes ago
                                        <a rel="noopener noreferrer" href="#" className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">Business</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Fast Section end here */}



            {/* style="background-image: url(&quot;https://source.unsplash.com/random/240x320&quot;);" */}
            {/* Second Section start here */}
            <section className="max-w-screen-xl p-5 mx-auto">
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
                    <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500" >
                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                        <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                            <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined">Politics</a>
                            <div className="flex flex-col justify-start text-center dark:text-gray-100">
                                <span className="text-3xl font-semibold leading-none tracking-wide">04</span>
                                <span className="leading-none uppercase">Aug</span>
                            </div>
                        </div>
                        <h2 className="z-10 p-5">
                            <a rel="noopener noreferrer" href="#" className="font-medium text-md hover:underline dark:text-gray-100"> Autem sunt tempora mollitia magnam non voluptates</a>
                        </h2>
                    </div>
                    {/* style="background-image: url(&quot;https://source.unsplash.com/random/241x320&quot;);" */}
                    <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500" >
                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                        <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                            <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined">Health</a>
                            <div className="flex flex-col justify-start text-center dark:text-gray-100">
                                <span className="text-3xl font-semibold leading-none tracking-wide">01</span>
                                <span className="leading-none uppercase">Aug</span>
                            </div>
                        </div>
                        <h2 className="z-10 p-5">
                            <a rel="noopener noreferrer" href="#" className="font-medium text-md hover:underline dark:text-gray-100">Inventore reiciendis aliquam excepturi</a>
                        </h2>
                    </div>
                    {/* style="background-image: url(&quot;https://source.unsplash.com/random/242x320&quot;);" */}
                    <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500" >
                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                        <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                            <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined">Science</a>
                            <div className="flex flex-col justify-start text-center dark:text-gray-100">
                                <span className="text-3xl font-semibold leading-none tracking-wide">28</span>
                                <span className="leading-none uppercase">Jul</span>
                            </div>
                        </div>
                        <h2 className="z-10 p-5">
                            <a rel="noopener noreferrer" href="#" className="font-medium text-md hover:underline dark:text-gray-100">Officiis mollitia dignissimos commodi optio vero animi</a>
                        </h2>
                    </div>
                    {/* style="background-image: url(&quot;https://source.unsplash.com/random/243x320&quot;);" */}
                    <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500" >
                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                        <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                            <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined">Sports</a>
                            <div className="flex flex-col justify-start text-center dark:text-gray-100">
                                <span className="text-3xl font-semibold leading-none tracking-wide">19</span>
                                <span className="leading-none uppercase">Jul</span>
                            </div>
                        </div>
                        <h2 className="z-10 p-5">
                            <a rel="noopener noreferrer" href="#" className="font-medium text-md hover:underline dark:text-gray-100">Doloribus sit illo necessitatibus architecto exercitationem enim</a>
                        </h2>
                    </div>
                </div>
            </section>
            {/* Second Section end here */}





            {/* third Section start here */}
            <ThirdBlog/>
            {/* third Section end here */}
        </div>
    );
};

export default Blog;