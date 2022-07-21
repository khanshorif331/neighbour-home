import React from 'react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
     return (
          <div style={{fontFamily:"'Rajdhani', sans-serif"}} className='px-24 py-16'>
               <h2 className="uppercase text-3xl font-bold text-center ">
                    Testimonials
               </h2>
               <div className="flex justify-center">
                    <div className=" rounded-md w-32 h-1 bg-[#0D9488]"></div>
                    <div className=" rounded-md w-4 h-1 mx-2 bg-[#0D9488]"></div>
                    <div className=" rounded-md w-2 h-1 bg-[#0D9488]"></div>
               </div>
               <div className="flex pt-10">
                    <div className='w-5/12 '>
                         <h1 className="text-6xl font-bold text-teal-900">Reviews form happy client</h1>
                         <p className='pr-10 py-8'>Construction of itself, because it is pain some
                              some proper style design occur in toil and pain we have expert team some master</p>
                         <Link className='border-b border-teal-900 duration-150 text-lg hover:text-teal-500' to={""}>view more</Link>
                    </div>

                    <div className='w-7/12 flex justify-evenly flex-wrap'>


                         <div className='bg-teal-100 w-[320px] p-10 rounded-tr-3xl rounded-bl-3xl'>
                              <q>Publishing packages and web page now use Lorem Ipsum as their mel text, and a search for lorem more than one articel a is very important which can be help us for building a beauiful construction</q>
                              <div className="flex items-center mt-3">
                                   <img className='h-14 w-14 rounded-full mr-3' src="https://htmldemo.net/oxybuild/oxybuild/assets/images/testimonial/avatar/1-1-46x46.png" alt="" />
                                   <div>
                                        <h4 className='font-semibold leading-none mb-1 text-teal-900'>Christoper Luis</h4>
                                        <h5 className='leading-none'>CEO, Octafact Group</h5>
                                   </div>
                              </div>
                         </div>

                         <div className='bg-teal-100 w-[320px] p-10 rounded-tr-3xl rounded-bl-3xl'>
                              <q>Publishing packages and web page now use Lorem Ipsum as their mel text, and a search for lorem more than one articel a is very important which can be help us for building a beauiful construction</q>
                              <div className="flex items-center mt-3">
                                   <img className='h-14 w-14 rounded-full mr-3' src="https://htmldemo.net/oxybuild/oxybuild/assets/images/testimonial/avatar/1-2-46x46.png" alt="" />
                                   <div>
                                        <h4 className='font-semibold leading-none mb-1 text-teal-900'>Rayana Begum</h4>
                                        <h5 className='leading-none'>CEO, Xerox Ltd. Group</h5>
                                   </div>
                              </div>
                         </div>


                    </div>
               </div>
          </div>
     );
};

export default Testimonials;