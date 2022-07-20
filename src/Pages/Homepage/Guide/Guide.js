import React from 'react';

const Guide = () => {
     return (
          <div className='flex items-center flex-col sm:flex-row sm:px-28 py-10'>
               <div className='w-full sm:w-5/12'>
               <img className='w-7/12 mx-auto' src="https://e-builder.net/wp-content/uploads/Ultimate-Guides.png" alt="" />
               </div>
               <div className='w-10/12 sm:w-6/12 text-center sm:text-left'>
                    <p className='text-gray-500'>Overcome top challenges faced by capital program managers and owners with</p>
                    <p style={{ color: "#0e416c" }} className="font-semibold" >The Ultimate Construction Management Guide Collection.</p>
                    <button className='sm:px-7 px-5 transition py-1.5 sm:py-2.5 hover:bg-teal-800 rounded-[3px] mt-5 uppercase hover:text-white bg-white text-teal-900 border border-teal-900 '>Download The Guides</button>

               </div>
          </div>
     );
};

export default Guide;