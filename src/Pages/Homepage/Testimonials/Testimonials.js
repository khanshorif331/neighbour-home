import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../../App';
import Review from './Review';

const Testimonials = () => {
     const [reviews, setReviews] = useState([])
     const [darkMode] = useContext(DarkModeContext)

     useEffect(() => {

          axios.get(`reviews.json`)
               .then(data => {
                    setReviews(data.data)
               })

     }, [])
     // console.log(reviews.slice(0, 2));

     return (
          <div
               style={{ fontFamily: "'Rajdhani', sans-serif" }}
               className='sm:px-24 px-10 text-center sm:text-left py-16'>
               <h2 className={`${darkMode&& "text-white"} uppercase text-3xl font-bold text-center `}>
                    Testimonials
               </h2>
               <div className="flex justify-center">
                    <div className=" rounded-md w-32 h-1 bg-[#0D9488]"></div>
                    <div className=" rounded-md w-4 h-1 mx-2 bg-[#0D9488]"></div>
                    <div className=" rounded-md w-2 h-1 bg-[#0D9488]"></div>
               </div>
               <div className="flex pt-10 flex-wrap">
                    <Fade right duration='2000'>
                         <div className={`${darkMode&& "text-gray-200"} w-full sm:w-5/12 pb-8 sm:pb-0`}>
                              <h1 className={`${darkMode?"text-teal-600":"text-teal-900"} text-4xl sm:text-6xl font-bold uppercase `}>Reviews from happy client</h1>
                              <p className='sm:pr-10 pt-3 sm:py-8'>Construction of itself, because it is pain some
                                   some proper style design occur in toil and pain we have expert team some master</p>
                              <Link className='border-b border-teal-900 duration-150 text-lg hover:text-teal-500' to={""}>view more</Link>
                         </div>
                    </Fade>

                    <Fade left duration='2000'>
                         <div className='w-full sm:w-7/12 flex justify-evenly flex-wrap'>


                              {
                                   reviews.slice(0, 2).map((review, i) => <Review
                                        key={i}
                                        review={review}
                                   ></Review>)
                              }

                         </div>
                    </Fade>
               </div>
          </div>
     );
};

export default Testimonials;