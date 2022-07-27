import React, { useContext } from 'react';
import { GiCheckMark } from 'react-icons/gi';
import { DarkModeContext } from '../../../App';

const AboutUs = () => {
     const [darkMode] = useContext(DarkModeContext)

     return (
          <div style={{ fontFamily: "'Rajdhani', sans-serif" }} className={`${darkMode && "text-white"}  py-16 px-10 sm:px-20`}>
               <h2 className={`${darkMode && "text-white"} uppercase text-3xl font-bold text-center`}>
                    About Us
               </h2>
               <div className="flex justify-center mb-16">
                    <div className=" rounded-md w-32 h-1 bg-[#0D9488]"></div>
                    <div className=" rounded-md w-4 h-1 mx-2 bg-[#0D9488]"></div>
                    <div className=" rounded-md w-2 h-1 bg-[#0D9488]"></div>
               </div>
               <div className='flex capitalize flex-col sm:flex-row'>
                    <div className='w-10/12 sm:w-5/12'>
                         <div className='relative w-full sm:w-9/12 sm:h-[420px] mx-auto  '>
                              <img src="https://verint.imgix.net/wp-content/uploads/definitive-bo-13-800x1000-1.jpg?fit=max&auto=format&auto=compress" alt="" className="w-full overflow-hidden h-full" />
                              <div className='flex items-center justify-center flex-col font-semibold text-white  bg-teal-900 h-[130px] w-[130px] rounded-full absolute top-[-40px] right-[-40px]'>
                                   <h2 className='text-3xl font-bold'>25</h2>
                                   <p>Years</p>
                                   <p>Exprience</p>
                              </div>
                         </div>
                    </div>
                    <div className='w-11/12 sm:w-6/12 text-center sm:text-left sm:mt-0 mt-8'>
                         {/* <h5 className="font-semibold">About Us</h5> */}
                         <h2 className="text-3xl font-bold sm:w-7/12">We Have <span className={`${darkMode ? "text-teal-600" : "text-teal-900"} `}>25</span> Years of Experience With a big fame <span className={`${darkMode ? "text-teal-600" : "text-teal-900"} `}>our and company</span></h2>
                         <p className='py-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti aliquam aspernatur itaque corrupti iste repellendus architecto adipisci recusandae enim doloribus?</p>
                         <ul className='flex flex-wrap justify-between'>
                              <li className='flex items-center my-1 w-full  pl-10 sm:w-5/12'> <GiCheckMark className='text-green-700 mr-2 '></GiCheckMark> Hight Quality Work</li>
                              <li className='flex items-center my-1 w-full  pl-10 sm:w-5/12'> <GiCheckMark className='text-green-700 mr-2 '></GiCheckMark> Expert & Professional</li>
                              <li className='flex items-center my-1 w-full  pl-10 sm:w-5/12'> <GiCheckMark className='text-green-700 mr-2 '></GiCheckMark> Client Managment</li>
                              <li className='flex items-center my-1 w-full  pl-10 sm:w-5/12'> <GiCheckMark className='text-green-700 mr-2 '></GiCheckMark> 24+7 Emergency Service</li>
                         </ul>
                         <button
                              className='px-8 py-3 border-2 border-teal-900 bg-teal-900 hover:bg-white hover:text-teal-900  duration-200 text-white rounded inline-block mt-4 sm:mt-8 font-semibold'>
                              Explore Now
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default AboutUs;