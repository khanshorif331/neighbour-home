import React, { useContext } from 'react';
import { DarkModeContext } from '../../App';
import useEngineers from '../../hooks/useEngineers';
import EngineerRow from './EngineerRow';

const EngineersTable = () => {
    const [engineers] = useEngineers([]);
    const [darkMode, setDarkMode] = useContext(DarkModeContext);
    return (
        <div className='my-32'>
            <h2 className={`${darkMode && "text-white"} text-2xl py-4 text-center`}>All Engineers: {engineers.length}</h2>
            <div className="overflow-x-auto px-24">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Profession</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            engineers.map((engineer, index)=><EngineerRow
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