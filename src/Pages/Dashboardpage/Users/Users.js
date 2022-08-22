import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import Loading from '../../../Shared/Loading/Loading'
import axios from 'axios';
import toast from 'react-hot-toast'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../../App';

const Users = () => {
    // const [constructors, setConstructors] = useState([])
    const [darkMode] = useContext(DarkModeContext)
    const { isLoading, error, data, refetch } = useQuery(['allUser'], () =>
        fetch('https://neighbour-home--server.herokuapp.com/user').then(
            res => res.json()
        )
    )
    // console.log(data)

    if (isLoading) return <Loading></Loading>

    if (error) return 'An error has occurred: ' + error.message
    // console.log(data);
    return (
        <div className='sm:px-10 px-2 pb-5'>
            <h5 className={`${darkMode ? "text-teal-400" : "text-primary"} text-lg text-left font-bold  mb-2 `}>
                Make Admin
            </h5>
            <div class='relative overflow-x-auto shadow-md sm:rounded-lg'>
                <table class={`${darkMode ? "text-gray-400" : "text-gray-500"} w-full text-sm text-left  `}>
                    <thead class={`${darkMode ? "bg-gray-700 text-gray-400" : "text-gray-700  bg-gray-50 "} text-xs uppercase`}>
                        <tr>
                            <th scope='col' class='py-2  sm:py-3'></th>
                            <th scope='col' class='py-2 sm:py-3'>
                                user email
                            </th>
                            <th scope='col' class='py-2 sm:py-3 text-center'>
                                role
                            </th>
                            <th scope='col' class='py-2 sm:py-3 text-center'>
                                Action
                            </th>
                            <th scope='col' class='py-2 sm:py-3 text-center'>
                                Info
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((user, i) => {
                            // console.log(user)

                            const makeAdmin = () => {
                                const userData = {
                                    role: "admin"
                                }
                                // console.log(user.email);
                                axios.put(`https://neighbour-home--server.herokuapp.com/user?email=${user.email}`, userData)
                                    .then(data => {
                                        console.log(data.data);

                                        toast.success(`${user.email} has been Successfully Made Admin!`)
                                        refetch()
                                    }).catch(error => {
                                        console.log(error.response.data);
                                        if (error.response.status === 403) {
                                            toast.error("You are Not Admin")
                                        }
                                    })
                            }

                            const deleteAdmin = () => {
                                const userData = {
                                    role: ""
                                }

                                Swal.fire({
                                    title: 'Are you sure?',
                                    text: "You won't be able to revert this!",
                                    icon: 'warning',
                                    showCancelButton: true,
                                    confirmButtonColor: '#d33',
                                    cancelButtonColor: '#3085d6',
                                    confirmButtonText: 'Yes, delete from admin!'
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        axios.put(`https://neighbour-home--server.herokuapp.com/user?email=${user.email}`, userData)
                                            .then(data => {
                                                console.log(data.data);
                                                Swal.fire(
                                                    'Deleted!',
                                                    `${user.email} has been Deleted from admin.`,
                                                    'success'
                                                )
                                                refetch()
                                            }).catch(error => {
                                                console.log(error.response.data);
                                                if (error.response.status === 403) {
                                                    toast.error("You are Not Admin")
                                                }
                                            })




                                    }
                                })

                            }

                            return (
                                <tr
                                    key={user._id}
                                    class={`${darkMode ? " bg-gray-800 border-gray-700 odd:bg-gray-800 even:bg-gray-700" : "border-b odd:bg-white even:bg-gray-50"}   `}
                                >
                                    <th
                                        scope='row'
                                        class={`${darkMode ? "text-white" : "text-gray-900"}  px-3 sm:pr-0 sm:pl-8 py-2  sm:py-4 font-medium  whitespace-nowraptext-[13px]`}
                                    >
                                        {i + 1}
                                    </th>
                                    <td class='py-2 text-[11px] sm:text-[13px] sm:py-4'>
                                        {user.email}
                                    </td>
                                    <td class='py-2 text-[13px] sm:py-4 text-center'>
                                        {user.role}
                                    </td>
                                    <td class='py-2 text-[13px] sm:py-4 text-center'>
                                        {user?.role === 'admin' ?

                                            <button onClick={deleteAdmin} class={`${darkMode && "hover:text-white hover:btn-ghost" } btn btn-xs  btn-warning`}>
                                                Delete Admin
                                            </button>
                                            :

                                            <button
                                                onClick={makeAdmin}
                                                class={`${darkMode && "hover:text-white hover:btn-ghost" } btn btn-xs  btn-success`}>
                                                Make Admin
                                            </button>
                                        }
                                    </td>
                                    <td class='py-2 text-[13px] sm:py-4 text-center'>
                                        <Link className='btn btn-xs btn-ghost duration-200' to={`/user/${user._id}`} >Details</Link>

                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users
