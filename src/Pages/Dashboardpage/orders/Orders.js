import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import Loading from '../../../Shared/Loading/Loading';
import OrderRow from './OrderRow';
import { DarkModeContext } from '../../../App';

const Orders = () => {
    const [darkMode, setDarkMode] = useContext(DarkModeContext);
    const { isLoading, error, data, refetch } = useQuery(['allOrders'], () =>
        fetch('https://neighbour-home--server.herokuapp.com/booking').then(
            res => res.json()
        )
    );
    
    if (isLoading) return <Loading></Loading>
    
    if (error) return 'An error has occurred: ' + error.message
    return (
        <div className=''>
            <h2 className={`${darkMode && "text-white"} text-2xl py-4 text-center`}>All Hiring List: {data?.length}</h2>
            <div className="overflow-x-auto px-2">
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
                            <th>Phone</th>
                            <th>engineer</th>
                            <th>email</th>
                            <th>Phone</th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {
                            data?.map((d, index)=><OrderRow
                                index={index}
                                key={d?._id}
                                d={d}
                                refetch={refetch}
                                ></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;