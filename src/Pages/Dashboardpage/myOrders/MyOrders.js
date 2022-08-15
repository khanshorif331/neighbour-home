import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import { useAuthState } from 'react-firebase-hooks/auth';
import { DarkModeContext } from '../../../App';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import MyOrderRow from './MyOrderRow';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const {displayName, email} = user;
    const [darkMode, setDarkMode] = useContext(DarkModeContext);
    const { isLoading, error, data, refetch } = useQuery(['myOrders'], () =>
        fetch(`https://neighbour-home--server.herokuapp.com/bookingByEmail?email=${email}`).then(
            res => res.json()
        )
    );
    
    if (isLoading) return <Loading></Loading>
    
    console.log(data);
    
    return (
            <div className=''>
            <h2 className={`${darkMode && "text-white"} text-2xl py-4 text-center`}>My All Hiring List: {data?.length}</h2>
            <div className="overflow-x-auto">
                <table className={`${
                        darkMode ? 'text-gray-400' : 'text-gray-500 table table-zebra'
                    } w-full px-2`}>
                    <thead className={`${
                            darkMode
                                ? 'bg-gray-700 text-gray-400 '
                                : 'text-gray-700  bg-gray-50 '
                        } text-xs uppercase `}>
                        <tr className=''>
                            <th></th>
                            <th className=' py-2'>customer</th>
                            <th>Email</th>
                            <th>engineer</th>
                            <th>email</th>
                            <th>Phone</th>
                            <th>Status</th>
            
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {
                            data?.map((d, index)=><MyOrderRow
                                index={index}
                                key={d._id}
                                d={d}
                                refetch={refetch}
                                ></MyOrderRow>)
                        }
                    </tbody>
                </table>
            </div>
            </div>

    );
};

export default MyOrders;