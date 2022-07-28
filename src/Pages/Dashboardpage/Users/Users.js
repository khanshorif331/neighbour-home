import React from 'react';

const Users = () => {
     const users = [
          {
               roll:"admin",
               email:'tajulislam601@gmail.com'
          }
     ]
     // console.log(users);
     return (
          <div className='sm:px-10 px-2 pb-5'>
            <h5 className="text-lg text-left font-bold  mb-2 text-primary">Make Admin</h5>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-2  sm:py-3">

                            </th>
                            <th scope="col" class="py-2 sm:py-3">
                                user
                            </th>
                            <th scope="col" class="py-2 sm:py-3 text-center">
                                Autorize
                            </th>
                            <th scope="col" class="py-2 sm:py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, i) => {
                              console.log(user);
                                const makeAdmin = () => {
                                   //  axiosPrivate.put(`https://shielded-waters-86658.herokuapp.com/user/makeAdmin/${user?.email}`)
                                   //      .then(data => {
                                   //          console.log(data.data);
                                   //          if (data?.data.acknowledged) {
                                   //              toast.success(`${user.email} has been Successfully Made Admin!`)
                                   //              refetch()
                                   //          }
                                   //      }).catch(error => {
                                   //          console.log(error.response);
                                   //          if (error.response.status === 403) {
                                   //              toast.error("You are Not Admin")
                                   //          }
                                   //      })

                                }

                                const deleteAdmin = () => {
                                   //  axiosPrivate.put(`https://shielded-waters-86658.herokuapp.com/user/deleteAdmin/${user?.email}`)
                                   //      .then(data => {
                                   //          console.log(data.data);
                                   //          if (data?.data.acknowledged) {
                                   //              toast.success(`${user.email} has been Successfully Delete from Admin!`)
                                   //              refetch()
                                   //          }
                                   //      }).catch(error => {
                                   //          console.log(error.response);
                                   //          if (error.response.status === 403) {
                                   //              toast.error("You are Not Admin")
                                   //          }
                                   //      })

                                }

                                return (
                                    <tr key={user._id} class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                                        <th scope="row" class="px-3 sm:pr-0 sm:pl-8 py-2  sm:py-4 font-medium text-gray-900 dark:text-white whitespace-nowraptext-[13px]">
                                            {i + 1}
                                        </th>
                                        <td class="py-2 text-[11px] sm:text-[13px] sm:py-4">
                                            {user.email}
                                        </td>
                                        <td
                                            class="py-2 text-[13px] sm:py-4 text-center">
                                            {
                                                user?.roll !== 'admin' && <button
                                                    onClick={makeAdmin}
                                                    class="h-5 sm:h-6  sm:px-3 uppercase bg-green-400 border-none hover:bg-green-600 rounded-full text-white">Make Admin</button>
                                            }
                                        </td>
                                        <td
                                            onClick={deleteAdmin} class="py-2 text-[13px] sm:py-4 text-center">
                                            <button class="h-5 sm:h-6  sm:px-3 uppercase bg-red-500 border-none  hover:bg-red-800 rounded-full text-white">Delete Admin</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>

        </div>
     );
};

export default Users;