import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const UserDetails = () => {
     const [user, setUser] = useState([])
     const [userLoading, setUserLoading] = useState(true)
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
               className='pb-10 sm:py-0 sm:mt-[150px] mt-[80px] mb-10 w-10/12 mx-auto'>
               <div class="bg-white w-11/12 mx-auto shadow overflow-hidden sm:rounded-lg">
                    <div class="px-4 py-4 sm:px-6">
                         <h3 class="text-2xl leading-6 font-medium text-primary">User Information</h3>
                         <p class="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                    </div>
                    <div class="border-t text-left border-gray-200">
                         <dl>
                              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                   <dt class="text-sm font-medium text-gray-500">Full name</dt>
                                   <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.name}</dd>
                              </div>
                              <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                   <dt class="text-sm font-medium text-gray-500">Email address</dt>
                                   <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.email}</dd>
                              </div>
                              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                   <dt class="text-sm font-medium text-gray-500">Number</dt>
                                   <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.phone}</dd>
                              </div>
                              <div class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                   <dt class="text-sm font-medium text-gray-500">Address</dt>
                                   <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.address}, {user.country}</dd>
                              </div>
                              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                   <dt class="text-sm font-medium text-gray-500">Zip</dt>
                                   <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.zip}</dd>
                              </div>
                              <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                   <dt class="text-sm font-medium text-gray-500">Role</dt>
                                   <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.role}</dd>
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