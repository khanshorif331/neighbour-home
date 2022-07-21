import React from 'react';

const NewsLetter = () => {
     return (
          <div style={{fontFamily:"'Rajdhani', sans-serif"}} className=' bg-teal-800 py-16 px-20 flex text-white'>
               <h1 className="text-6xl w-4/12 font-bold  border-r">Subscribe Our News Letter</h1>
               <div className='w-8/12 text-left'>
                    <input className='w-8/12 mr-1 h-14' type="text" />
               </div>
          </div>
     );
};

export default NewsLetter;