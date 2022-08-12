import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import Property from './Property';

const Properties = () => {
    const { isLoading, error, data: properties, refetch } = useQuery(['properties'], () =>
        fetch('properties.json').then(
            res => res.json()
        )
    )
    // console.log(properties);
    if (isLoading) <Loading />
    return (
        <div className="flex flex-wrap justify-evenly py-8 px-16">
            {
                properties?.map(property => <Property property={property} />)
            }
        </div>
    );
};

export default Properties;