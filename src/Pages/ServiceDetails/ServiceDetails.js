import React from 'react';
import { useParams } from 'react-router-dom';
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
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;