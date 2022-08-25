import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import {
     CardElement,
     Elements,
     useStripe,
     useElements,
} from '@stripe/react-stripe-js';
// import CheckoutForm from './CheckoutForm';
import axios from 'axios';
import Loading from '../../Shared/Loading/Loading';
import { useQuery } from '@tanstack/react-query';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L1nmKGPq7AV2lfodr5gcy3EzSOHKwBEH2emqXejNfRM0LSaua89mPiSH0YGJW9hBL86KKbfRlFQyItk4guugH3t00uj3H1Hs8');
const Payment = () => {
     const [property, setProperty]= useState({})
     const [propertyLoading, setPropertyLoading]= useState(true)
     const { id } = useParams()
     useEffect(()=>{
          const url = `https://neighbour-home--server.herokuapp.com/sellPost/${id}`;
          axios.get(url)
          .then(data=>{
               setProperty(data.data)
               setPropertyLoading(false)
          })
     }, [id])

    
     const { _id, images, length, location, propertyName, propertyPrice, propertyType, rating, selingarea, sellerName, totalarea, width } = property;
     if (propertyLoading) {
          return <Loading />
     }
     return (
          <div
          style={{ fontFamily: "'Rajdhani', sans-serif" }} className='mt-[129px]'>
                    <div
                    className="flex justify-evenly flex-col-reverse sm:flex-row py-16 w-11/12 sm:container mx-auto">
                    <div className="flex flex-col p-2 sm:p-10 sm:text-left text-center sm:mt-0 mt-3 md:flex-row md:w-8/12  rounded-lg bg-white shadow-lg">
                         <div className='w-11/12 mx-auto sm:mx-0 mb-10 sm:mb-0 sm:w-4/12 text-center'>
                              <h2 className='text-xl'>{propertyName}</h2>
                              <img className="w-56  sm:mx-0 mx-auto sm:w-full h-32 sm:h-96 md:h-48 object-cover md:w-56 rounded-t-lg md:rounded-none md:rounded-l-lg" src={images} alt="" />
                              <h2 className=''>Order Length : {length}</h2>
                              <h2 className=''>Price : {propertyPrice}</h2>
                         </div>

                         <Elements stripe={stripePromise}>
                        <CheckoutForm
                            property={property}
                        />
                    </Elements>





                    </div>

               </div>
          </div>
     );
};

export default Payment;