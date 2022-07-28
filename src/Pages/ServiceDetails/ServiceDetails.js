import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetails from '../../hooks/useServiceDetails';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetails(serviceId);
    const { title, picture, _id, description } = service;
    return (
        <div>
            <div class="hero min-h-screen bg-base-200 mt-16">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={picture} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 class="text-5xl font-bold">{title}</h1>
                        <p class="py-6">{description}</p>
                        <div>
                            <Link to={`/engineer`} >
                                <button
                                    className='px-8 py-3 border-2 border-teal-900 bg-teal-900 hover:bg-white hover:text-teal-900  duration-200 text-white rounded uppercase inline-block mt-4 sm:mt-8 font-semibold'>
                                    hire a engineer
                                </button>
                            </Link>
                            <Link to={`/engineer`} >
                                <button
                                    className='px-8 py-3 border-2 border-teal-900 bg-teal-900 hover:bg-white hover:text-teal-900  duration-200 text-white rounded uppercase inline-block mt-4 sm:mt-8 font-semibold'>
                                    hire workers
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;