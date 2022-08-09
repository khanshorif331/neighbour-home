import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Profile = () => {
    return (
        <section className='mt-[80px] sm:mt-[129px]'>
            <div className="">
                <input id="dashboardToggle" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />
                </div>
                <div className="">
                    <label htmlFor="dashboardToggle" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content border m-3 shadow">
                        <li className='w-full text-center'><Link to='/profile'>My Profile</Link></li>
                        <li className='w-full text-center'><Link to='/profile/address'>Address</Link></li>
                        <li className='w-full text-center'><Link to='/profile/education'>Education</Link></li>
                        <li className='w-full text-center'><Link to='/profile/got_hired'>Got Hired</Link></li>
                        <li className='w-full text-center'><Link to='/profile/important_links'>Important Links</Link></li>
                        <li className='w-full text-center'><Link to='/profile/job_experience'>Job Experience</Link></li>
                        <li className='w-full text-center'><Link to='/dashboard/certification'>Certification</Link></li>
                    </ul>
                </div>
            </div>
        </section >
    );
};

export default Profile;