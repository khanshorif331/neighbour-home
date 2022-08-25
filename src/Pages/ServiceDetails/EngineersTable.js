import React, { useContext } from 'react';
import { DarkModeContext } from '../../App';
import useEngineers from '../../hooks/useEngineers';
import EngineerRow from './EngineerRow';

const EngineersTable = () => {
    const [engineers, setEngineers] = useEngineers([]);
    // console.log(engineers && engineers);
    const [darkMode, setDarkMode] = useContext(DarkModeContext);
    return (
        <div className='my-32'>
            <h2 className={`${darkMode && "text-white"} text-2xl py-4 text-center`}>All Engineers: {engineers?.length}</h2>
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
                            engineers?.map((engineer, index)=><EngineerRow
                                index={index}
                                key={engineer._id}
                                engineer={engineer}
                                // refetch={refetch}
                                ></EngineerRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EngineersTable;