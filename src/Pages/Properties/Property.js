import React from 'react';
import { MdLocationPin } from 'react-icons/md';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from 'react-rating';
import { useNavigate } from 'react-router-dom';

const Property = ({ property }) => {
     const navigate = useNavigate()
     const { _id, images, length, location, propertyName, propertyPrice, propertyType, rating, selingarea, sellerName, totalarea, width } = property;
     return (
          <div className='h-[400px] w-[250px] m-5 bg-teal-400 rounded-xl relative overflow-hidden'>
               <img className='w-full h-[155px] ' src={images} alt={images} />

               <div className='absolute bottom-0 bg-teal-100 rounded-xl opacity-90 px-4 py-3 w-full'>
                    <h5 className='flex items-center'>
                         <MdLocationPin></MdLocationPin> {location}
                    </h5>
                    <h3 className="text-xl">{propertyName}</h3>
                    <h4>Seller: {sellerName}</h4>
                    <h4>type: {propertyType}</h4>
                    <h4>Seling Area: {selingarea}</h4>
                    <h4>Total Area: {totalarea}</h4>
                    <h4>Width: {width}</h4>
                    <div>
                         <Rating
                              initialRating={rating}
                              emptySymbol={<FontAwesomeIcon style={{ color: '#A6ACAC' }} icon={faStar} />}
                              fullSymbol={<FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />}
                              readonly
                         ></Rating>
                    </div>
                    <div className='flex items-center justify-between'>
                         <button 
                         className='font-semibold'
                         onClick={()=> navigate(`/payment/${_id}`)} 
                         >Book Now</button>
                         <h2 className="text-2xl font-semibold">{propertyPrice}</h2>
                    </div>
               </div>

          </div>
     );
};

export default Property;