import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from 'react-rating';

const SellPostModal = () => {
     // const { images, rating,  } = property;

     const handleRate = (value) => {

          console.log(value);
     }
     return (
          <>
               <input type="checkbox" id="sellPost" className="modal-toggle" />
               <div className="modal text-center ">
                    <div className="modal-box mx-auto z-50 flex justify-center">
                         {/* updated form */}
                         <form
                              // onSubmit={handlePurchase}
                              className='sm:w-auto w-11/12 mx-auto sm:mx-0 text-left'>
                              <label
                                   for="sellPost"
                                   className="btn btn-sm btn-circle absolute right-5 top-5"
                              >
                                   ✕
                              </label>

                              <div class="relative z-0  w-full mb-6 group">
                                   <input type="text" name="propertyName" id="propertyName" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required="" />
                                   <label for="propertyName" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Property Name</label>
                              </div>
                              <div class="relative z-0 w-full mb-6 group">
                                   <input type="email" name="sellerName" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required="" />
                                   <label for="sellerName" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Seller Name</label>
                              </div>



                              <div class="relative z-0 w-full mb-6 group">
                                   <input type="text" name="location" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                                   <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
                              </div>
                              <div class="grid xl:grid-cols-2 xl:gap-x-6">

                                   <div class="relative z-0 w-full mb-3 group">
                                        <input
                                             //    onChange={handleQuantity}
                                             type="text" name="propertyType" id="propertyType" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required value={''} />
                                        <label className="label">
                                             {/* {quanityError && <span className="label-text-alt text-red-500">{quanityError}</span>} */}
                                        </label>
                                        <label for="propertyType" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Property Type</label>

                                   </div>
                                   <div class="relative z-0 w-full mb-3 group">
                                        <input type="number" name="propertyPrice" id="propertyPrice" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required="" />
                                        <label for="propertyPrice" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Property Price</label>
                                   </div>

                              </div>

                              <div class="grid xl:grid-cols-2 xl:gap-x-6">
                                   <div class="relative z-0 w-full mb-3 group">
                                        <input type="number" name="selingarea" id="selingarea" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required="" />
                                        <label for="selingarea" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Selling Area</label>
                                   </div>
                                   <div class="relative z-0 w-full mb-3 group">
                                        <input
                                             //    onChange={handleQuantity}
                                             type="number" name="totalarea" id="totalarea" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required value={''} />
                                        <label className="label">
                                             {/* {quanityError && <span className="label-text-alt text-red-500">{quanityError}</span>} */}
                                        </label>
                                        <label for="totalarea" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Total Area</label>

                                   </div>
                              </div>

                              <div class="grid xl:grid-cols-2 xl:gap-x-6">
                                   <div class="relative z-0 w-full mb-3 group">
                                        <input type="number" name="width" id="width" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required="" />
                                        <label for="width" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Width</label>
                                   </div>
                                   <div class="relative z-0 w-full mb-3 group">
                                        <input
                                             //    onChange={handleQuantity}
                                             type="number" name="length" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required value={''} />
                                        <label className="label">
                                             {/* {quanityError && <span className="label-text-alt text-red-500">{quanityError}</span>} */}
                                        </label>
                                        <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Length</label>
                                   </div>
                              </div>
                              <div class="grid xl:grid-cols-2 xl:gap-x-6 mb-5">

                                   <Rating
                                        onChange={handleRate}
                                        initialRating={0}
                                        emptySymbol={<FontAwesomeIcon style={{ color: '#A6ACAC' }} icon={faStar} />}
                                        fullSymbol={<FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />}

                                   ></Rating>
                              </div>
                              <div className='text-right'>
                                   <input style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '2px' }} class="hover:bg-primary text-center transition hover:text-white rounded-full text-primary border-2 border-primary w-36  text-sm sm:text-base  py-1.5 " type="submit" value="Submit" />
                              </div>
                         </form>

                         {/* <form className="w-10/12 mx-auto" >
                              <h3 className="text-lg font-bold text-teal-900">
                                   Add a new book !
                              </h3>

                              <label
                                   className=" block text-start lg:pl-2 text-md text-gray-400 font-bold mt-2"
                                   htmlFor="bookName"
                              >
                                   Book Name
                              </label>

                              <input
                                   className="w-full lg:w-[98%] font-serif font-bold px-4 py-2 border-2 border-teal-700 outline-teal-900 rounded-lg focus:bg-slate-200"
                                   type="text"
                                   name="bookName"
                                   id="bookName"
                              />

                              <label
                                   className=" block text-start lg:pl-2 text-md text-gray-400 font-bold my-0"
                                   htmlFor="pdfLink"
                              >
                                   PDF Link{" "}
                              </label>
                              <input
                                   className="w-full lg:w-[98%] font-serif font-bold px-4 py-2 border-2 border-teal-700 outline-teal-900 rounded-lg focus:bg-slate-200"
                                   type="text"
                                   name="pdfLink"
                                   id="pdfLink"
                              />
                              <textarea
                                   name="description"
                                   id="description"
                                   className="w-full lg:w-[98%] font-serif font-bold text-justify px-4 py-2 mt-2 border-2 border-teal-700 outline-teal-900 rounded-lg overflow-scroll focus:bg-slate-200"
                                   rows="5"
                              ></textarea>

                              <div className="flex justify-between mt-3 ">
                                   <input
                                        className="w-2/4 font-serif font-bold pl-2"
                                        type="file"
                                        name="bookPic"
                                        id="bookPic"
                                   />

                                   <button
                                        type="submit"
                                        className="btn btn-xs bg-teal-800  h-5 sm:h-7 ml-2 mr-2 sm:px-3 uppercase rounded-lg text-white font-bold duration-1000"
                                   >
                                        Add New Books
                                   </button>
                              </div>
                         </form> */}
                    </div>
               </div>
          </>
     );
};

export default SellPostModal;