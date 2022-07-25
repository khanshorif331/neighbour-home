import React from 'react';
import {GiCheckMark} from 'react-icons/gi';

const AboutUs = () => {
     return (
          <div className='py-16 px-20'>
               <h2 className="uppercase text-3xl font-bold text-center">
                    About Us
               </h2>
               <div className="flex justify-center mb-10">
                    <div className=" rounded-md w-32 h-1 bg-[#0D9488]"></div>
                    <div className=" rounded-md w-4 h-1 mx-2 bg-[#0D9488]"></div>
                    <div className=" rounded-md w-2 h-1 bg-[#0D9488]"></div>
               </div>
          <div className='flex  items-center '>
               <div className='w-5/12'>
                    <img src="https://m.media-amazon.com/images/M/MV5BMmRmNjMwN2EtZDRkZS00Mjc3LTg1NTctYTMyNjk2MmViMzE5XkEyXkFqcGdeQXVyNzIxODIzOQ@@._V1_.jpg" alt="" className="w-9/12 mx-auto" />
               </div>
               <div className='w-5/12'>
                    {/* <h5 className="font-semibold">About Us</h5> */}
                    <h2 className="text-3xl font-bold">We Have <span className='text-teal-900'>25</span> Years of Experience With a big fame <span className='text-teal-900'>our and company</span></h2>
                    <p className='py-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti aliquam aspernatur itaque corrupti iste repellendus architecto adipisci recusandae enim doloribus?</p>
                    <ul>
                         <li className='flex items-center'> <GiCheckMark></GiCheckMark> Hight Quality Work</li>
                         <li className='flex items-center'> <GiCheckMark></GiCheckMark> Expert & Professional</li>
                         <li className='flex items-center'> <GiCheckMark></GiCheckMark> Expert & Professional</li>
                         <li className='flex items-center'> <GiCheckMark></GiCheckMark> Client Managment</li>
                         <li className='flex items-center'> <GiCheckMark></GiCheckMark> 24+7 Emergency Service</li>
                    </ul>
                    <button
                         className='px-8 py-3 bg-teal-900 hover:bg-white hover:text-teal-900  transition text-white rounded inline-block mt-4 sm:mt-8 font-semibold'>
                         Explore Now
                    </button>
               </div>
          </div>
          </div>
     );
};

export default AboutUs;