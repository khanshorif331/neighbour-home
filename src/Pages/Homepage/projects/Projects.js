import React, { useContext } from 'react';
import { DarkModeContext } from '../../../App';
import useProjects from '../../../hooks/useProjects';
import Project from './Project';

const Projects = () => {
    const [projects] = useProjects();
    const [darkMode, setDarkMode] = useContext(DarkModeContext)
    return (
        <div className='pt-8'>
            <div className='text-center w-100'>
                <h2 style={{ fontFamily: "'Rajdhani', sans-serif" }}
				className={`${
					darkMode && 'text-white'
				} uppercase  font-bold text-4xl py-3 text-center`}>our LATEST PROJECT</h2>
                <div className="flex justify-center mb-16">
                    <div className=" rounded-md w-32 h-1 bg-[#0D9488]"></div>
                    <div className=" rounded-md w-4 h-1 mx-2 bg-[#0D9488]"></div>
                    <div className=" rounded-md w-2 h-1 bg-[#0D9488]"></div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 lg:px-24 px-12 pb-24'>
                {
                    projects.map(project => <Project
                        key={project._id}
                        project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;