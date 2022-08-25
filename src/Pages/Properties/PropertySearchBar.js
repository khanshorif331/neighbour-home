import React, { useState } from 'react';
import SellPostModal from './SellPostModal';

const PropertySearchBar = ({ refetch }) => {
     const [manageSellPostModal, setManageSellPostModal] = useState(false)
     return (
          <div>
               <div className="sticky z-10 top-0 mt-5 h-16 border-b bg-white lg:py-2.5">
                    <div className="px-6  flex items-center justify-between space-x-4 2xl:container">
                         <h5 className="text-2xl text-gray-600 font-medium block">

                         </h5>
                         <div className='flex items-center'>
                              <label
                                   onClick={() => setManageSellPostModal(true)}
                                   for="sellPost"
                                   className=" text-lg font-medium border rounded-xl border-teal-400 py-1 cursor-pointer hover:bg-teal-400 hover:text-white px-5 mr-3 text-teal-600 duration-500"
                              >
                                   Post Sell
                              </label>

                              {
                                   manageSellPostModal &&
                                   <SellPostModal
                                        refetch={refetch}
                                        setManageSellPostModal={setManageSellPostModal}
                                        
                                   />
                              }

                              <div className="flex space-x-4">
                                   {/* <!--search bar --> */}
                                   <div hidden className="md:block">
                                        <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                                             <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                                                  <svg
                                                       xmlns="http://ww50w3.org/2000/svg"
                                                       className="w-4 fill-current"
                                                       viewBox="0 0 35.997 36.004"
                                                  >
                                                       <path
                                                            id="Icon_awesome-search"
                                                            data-name="search"
                                                            d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                                                       ></path>
                                                  </svg>
                                             </span>
                                             <input
                                                  type="search"
                                                  name="leadingIcon"
                                                  id="leadingIcon"
                                                  placeholder="Search here"
                                                  className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"
                                             />
                                        </div>
                                   </div>
                                   {/* <!--/search bar --> */}
                                   <button
                                        aria-label="search"
                                        className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden"
                                   >
                                        <svg
                                             xmlns="http://ww50w3.org/2000/svg"
                                             className="w-4 mx-auto fill-current text-gray-600"
                                             viewBox="0 0 35.997 36.004"
                                        >
                                             <path
                                                  id="Icon_awesome-search"
                                                  data-name="search"
                                                  d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                                             ></path>
                                        </svg>
                                   </button>
                              </div>

                         </div>
                    </div>
               </div>
          </div>
     );
};

export default PropertySearchBar;