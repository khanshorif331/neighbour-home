import React from 'react';

const Review = ({review}) => {
     
     return (
          <div className='bg-teal-100 w-[320px] mb-5 sm:mb-0 p-8 rounded-tr-3xl rounded-bl-3xl'>
               <q>{review.comment}</q>
               <div className="flex items-center mt-3">
                    <img className='h-14 w-14 rounded-full mr-3' src={review.img} alt="" />
                    <div>
                         <h4 className='font-semibold leading-none mb-1 text-teal-900'>{review.name}</h4>
                         <h5 className='leading-none'>{review.position}</h5>
                    </div>
               </div>
          </div>
     );
};

export default Review;