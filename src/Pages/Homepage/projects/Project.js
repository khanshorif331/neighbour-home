import React from 'react';
// import Loading from './../../../Shared/Loading';
import './Project.css'

const Project = ({ project }) => {
    // if (!project.length) {
    //     <Loading></Loading>
    // }
    const { title, subtitle, image } = project;

    return (
        <div className="h-[343px]  lg:h-[212px]  xl:h-[262px] relative justify-center items-center flex project-image" style={{
            background: `url(${image})`
        }}>
            <div className='h-[343px]  lg:h-[212px]  xl:h-[262px] w-full flex justify-center items-center z-[2] project-overley-body'>
                <div className='h-0 w-0 flex justify-center items-center text-center z-[2] project-overley' style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                    <div className='opacity-0 project-content' style={{ transition: "all .4s" }}>
                        <div className='w-44'>
                            <a href="/" >
                                <h1 className="text-[1.5rem] text-[#fdc236] font-bold text-center">{title}</h1>
                            </a>
                            <p className='text-white'>{subtitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;