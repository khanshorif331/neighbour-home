import React, { useState } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from 'react-rating';
import axios from 'axios';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';

const SellPostModal = ({ setManageSellPostModal, refetch }) => {
     const [rating, setRating] = useState(0);
     const [ratingError, setRatingError] = useState("");
     const [user, loading] = useAuthState(auth);
     const imgStorage_key = `7a0f43e157252e0ca3031dea1d8dcccd`;


     const hanldeSellPost = (e) => {
          e.preventDefault();
          const picture = e.target.productImg.files[0];
          if (rating === 0) return setRatingError("Please Select Rating")
          setRatingError("")
          const formData = new FormData();
          formData.append("image", picture);
          const url = `https://api.imgbb.com/1/upload?key=${imgStorage_key}`;
          fetch(url, {
               method: "POST",
               body: formData,
          })
               .then((res) => res.json())
               .then((result) => {
                    if (result.success) {
                         const imgUrl = result.data.url;

                         const postInfo = {
                              sellerEmail: user?.email,
                              images: imgUrl,
                              length: e.target.length.value,
                              location: e.target.location.value,
                              propertyName: e.target.propertyName.value,
                              propertyPrice: e.target.propertyPrice.value,
                              propertyType: e.target.propertyType.value,
                              selingarea: e.target.selingarea.value,
                              sellerName: e.target.sellerName.value,
                              totalarea: e.target.totalarea.value,
                              width: e.target.width.value,
                              rating: rating,
                         };
                         // console.log(postInfo);
                         axios
                              .post(
                                   `https://neighbour-home--server.herokuapp.com/sellPost`,
                                   postInfo
                              )
                              .then((data) => {
                                   console.log(data);
                                   if (data.status === 200) {
                                        toast.success(`${postInfo.propertyName} successfully Posted`);
                                        setManageSellPostModal(false)
                                        e.target.reset()
                                        refetch()
                                   } else {
                                        toast.error(`Somthing is Wrong, Plz try again`);
                                   }
                              });
                    }
                    else {
                         toast.error(`Somthing is Wrong, Plz try again`);
                    }

               });

     }
     const handleRate = (value) => {
          setRating(value)
     }
     if (loading) return <Loading></Loading>

     return (
          <>
               <input type="checkbox" id="sellPost" className="modal-toggle" />
               <div className="modal text-center ">
                    <div className="modal-box mx-auto z-50  max-h-[100vh] flex justify-center">
                         <form
                              onSubmit={hanldeSellPost}
                              className='sm:w-10/12 w-11/12 py-3 mx-auto sm:mx-0 text-left'>
                              <label
                                   for="sellPost"
                                   className="btn btn-sm btn-circle absolute right-5 top-5"
                              >
                                   ✕
                              </label>

                              <div class="relative z-0  w-full mb-6 group">
                                   <input type="text" name="propertyName" id="propertyName" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                                   <label for="propertyName" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Property Name</label>
                              </div>
                              <div class="relative z-0 w-full mb-6 group">
                                   <input type="text" name="sellerName" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                                   <label for="sellerName" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Seller Name</label>
                              </div>


                              <div class="relative z-0 w-full mb-4 group">
                                   <input type="text" name="location" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                                   <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
                              </div>
                              <div class="grid xl:grid-cols-2 xl:gap-x-6">

                                   <div class="relative z-0 w-full  group">
                                        <input
                                             //    onChange={handleQuantity}
                                             type="text" name="propertyType" id="propertyType" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                                        <label className="label">
                                             {/* {quanityError && <span className="label-text-alt text-red-500">{quanityError}</span>} */}
                                        </label>
                                        <label for="propertyType" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Property Type</label>
                                   </div>
                                   <div class="relative z-0 w-full mb-3 group">
                                        <input type="number" name="propertyPrice" id="propertyPrice" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                                        <label for="propertyPrice" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Property Price</label>
                                   </div>

                              </div>

                              <div class="grid xl:grid-cols-2 xl:gap-x-6">
                                   <div class="relative z-0 w-full mb-3 group">
                                        <input type="number" name="selingarea" id="selingarea" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                                        <label for="selingarea" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Selling Area</label>
                                   </div>


                                   <div class="relative z-0 w-full mb-3 group">
                                        <input type="number" name="totalarea" id="totalarea" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                                        <label for="totalarea" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Total Area</label>
                                   </div>

                              </div>

                              <div class="grid xl:grid-cols-2 xl:gap-x-6">

                                   <div class="relative z-0 w-full mb-5 group">
                                        <input type="number" name="width" id="width" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                                        <label for="width" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Width</label>
                                   </div>


                                   <div class="relative z-0 w-full mb-3 group">
                                        <input type="number" name="length" id="length" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                                        <label for="length" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Length</label>
                                   </div>
                              </div>
                              <div class="grid xl:grid-cols-2 xl:gap-x-6 mb-5 items-center">
                                   <div className='flex flex-col'>
                                        <Rating
                                             onChange={handleRate}
                                             initialRating={rating}
                                             emptySymbol={<FontAwesomeIcon style={{ color: '#A6ACAC' }} icon={faStar} />}
                                             fullSymbol={<FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />}

                                        ></Rating>
                                        {ratingError && <span className="label-text-alt text-red-500">{ratingError}</span>}
                                   </div>

                                   <input class="
                                             form-control 
                                             py-1.5
                                             text-base
                                             font-normal
                                             text-gray-700
                                             bg-white bg-clip-padding
                                             border border-solid border-gray-300
                                             rounded
                                             transition
                                             ease-in-out
                                             m-0
                                             focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" name='productImg' id="formFile" required />
                              </div>
                              <div className='text-right'>
                                   <input style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '2px' }} class="hover:bg-primary text-center transition hover:text-white rounded-full cursor-pointer text-primary border-2 border-primary w-36  text-sm sm:text-base  py-1.5 " type="submit" value="Submit" />
                              </div>
                         </form>

                    </div>
               </div>
          </>
     );
};

export default SellPostModal;