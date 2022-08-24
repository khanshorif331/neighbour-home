import React, { useContext } from 'react';
import { DarkModeContext } from '../../App';
import useWorkers from '../../hooks/useWorkers';
import Loading from '../../Shared/Loading/Loading';
import WorkerRow from './WorkerRow';


const WorkersTable = () => {
    const [workers, setWorkers] = useWorkers([]);
    if(!workers.length){
        <Loading></Loading>
    }
    const [darkMode, setDarkMode] = useContext(DarkModeContext);
    return (
        <div className='my-32'>
            <h2 className={`${darkMode && "text-white"} text-2xl py-4 text-center`}>All Engineers: {workers?.length}</h2>
            <div className="overflow-x-auto lg:mx-24 relative shadow-md sm:rounded-lg">
                <table className={`${darkMode ? "text-gray-400" : "text-gray-500"} w-full text-sm text-left  `}>
                    <thead className={`${darkMode ? "bg-gray-700 text-gray-400" : "text-gray-700  bg-gray-50 "} text-xs uppercase`}>
                        <tr className=''>
                            <th className='py-2  sm:py-3'></th>
                            <th className='py-2  sm:py-3'>Avatar</th>
                            <th>Name</th>
                            <th>Profession</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            workers?.map((worker, index)=><WorkerRow
                                index={index}
                                key={worker._id}
                                worker={worker}
                                // refetch={refetch}
                                ></WorkerRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WorkersTable;