import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DarkModeContext } from '../../App';
import Loading from '../../Shared/Loading/Loading';

const UserDetails = () => {
     const [user, setUser] = useState([])
     const [userLoading, setUserLoading] = useState(true)
     const [darkMode] = useContext(DarkModeContext)

     const { id } = useParams()
     axios.get(`https://neighbour-home--server.herokuapp.com/user/${id}`)
          .then(data => {
               // console.log(data.data);
               setUser(data.data)
               setUserLoading(false)
          })

     if (userLoading) return <Loading />
     return (
          <div
               style={{ fontFamily: "'Rajdhani', sans-serif" }}
               className='pb-10 sm:py-0 sm:mt-[129px] h-[80vh] flex items-center mt-[80px] mb-10 w-10/12 mx-auto'>
               <div class={`${darkMode? "bg-gray-600": "bg-white"}   w-11/12 mx-auto shadow overflow-hidden sm:rounded-lg`}>
                    <div class="px-4 py-4 sm:px-6">
                         <h3 class={`${darkMode? "text-teal-400": "text-primary"}  text-2xl leading-6 font-medium `}>User Information</h3>
                         <p class={`${darkMode? "text-gray-100": "text-gray-600"}  mt-1 text-sm `}>Use a permanent address where you can receive mail.</p>
                    </div>
                    <div class="border-t text-left border-gray-200">
                         <dl>
                              <div class={`${darkMode? "bg-gray-500": "bg-gray-50"}  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
                                   <dt class={`text-sm font-medium ${darkMode? "text-gray-200": "text-gray-500"} `}>Full name</dt>
                                   <dd class={`${darkMode? "text-white": "text-gray-900"}  mt-1 text-sm  sm:mt-0 sm:col-span-2`}>{user.name}</dd>
                              </div>
                              <div class={`${darkMode? "bg-gray-400": "bg-white"}   px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
                                   <dt class={`text-sm font-medium ${darkMode? "text-gray-200": "text-gray-500"} `}>Email address</dt>
                                   <dd class={`${darkMode? "text-white": "text-gray-900"}  mt-1 text-sm  sm:mt-0 sm:col-span-2`}>{user.email}</dd>
                              </div>
                              <div class={`${darkMode? "bg-gray-500": "bg-gray-50"}  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
                                   <dt class={`text-sm font-medium ${darkMode? "text-gray-200": "text-gray-500"} `}>Number</dt>
                                   <dd class={`${darkMode? "text-white": "text-gray-900"}  mt-1 text-sm  sm:mt-0 sm:col-span-2`}>{user.phone}</dd>
                              </div>
                              <div class={`${darkMode? "bg-gray-400": "bg-white"}   px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
                                   <dt class={`text-sm font-medium ${darkMode? "text-gray-200": "text-gray-500"} `}>Address</dt>
                                   <dd class={`${darkMode? "text-white": "text-gray-900"}  mt-1 text-sm  sm:mt-0 sm:col-span-2`}>{user.address}, {user.country}</dd>
                              </div>
                              <div class={`${darkMode? "bg-gray-500": "bg-gray-50"}  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
                                   <dt class={`text-sm font-medium ${darkMode? "text-gray-200": "text-gray-500"} `}>Zip</dt>
                                   <dd class={`${darkMode? "text-white": "text-gray-900"}  mt-1 text-sm  sm:mt-0 sm:col-span-2`}>{user.zip}</dd>
                              </div>
                              <div class={`${darkMode? "bg-gray-400": "bg-white"}   px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
                                   <dt class={`text-sm font-medium ${darkMode? "text-gray-200": "text-gray-500"} `}>Role</dt>
                                   <dd class={`${darkMode? "text-white": "text-gray-900"}  mt-1 text-sm  sm:mt-0 sm:col-span-2`}>{user.role}</dd>
                              </div>

                         </dl>
                    </div>
               </div>
               {/* <div className='text-center sm:text-right mt-5 mr-3'>
              <label
                  onClick={() => setMyinfoModal(true)}
                  for="profile-modal"
                  style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '2px' }} class="hover:bg-primary transition hover:text-white rounded-full text-primary border-2 border-primary px-10 py-2">{profile.data ? "Update Profile" : "Add Profile"}</label>
          </div>

          {
              myInfoModal && <MyProfileModal
                  refetch={refetch}
                  profile={profile?.data}
                  setMyinfoModal={setMyinfoModal}></MyProfileModal>
          } */}




          </div>
     );
};

export default UserDetails;