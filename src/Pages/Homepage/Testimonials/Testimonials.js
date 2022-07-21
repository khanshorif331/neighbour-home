import React from 'react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
     return (
          <div className='px-24 py-16'>
               <h2 className="uppercase text-3xl font-bold text-center py-2">
                    Testimonials
               </h2>
               <div className="flex justify-center">
                    <div className=" rounded-md w-32 h-1 bg-[#0D9488]"></div>
                    <div className=" rounded-md w-4 h-1 mx-2 bg-[#0D9488]"></div>
                    <div className=" rounded-md w-2 h-1 bg-[#0D9488]"></div>
               </div>
               <div className="flex">
                    <div className='w-5/12 '>
                         <h1 className="text-6xl font-bold text-teal-900">Reviews form happy client</h1>
                         <p className='pr-10 py-5'>Construction of itself, because it is pain some
                              some proper style design occur in toil and pain we have expert team some master</p>
                         <Link className='border-b border-teal-900 duration-150 text-lg hover:text-teal-500' to={""}>view more</Link>
                    </div>
                    <div className='w-7/12'>
                         <div>
                              <q>Publishing packages and web page now use Lorem Ipsum as their mel text, and a search for lorem more than one articel a is very important which can be help us for building a beauiful construction</q>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Testimonials;