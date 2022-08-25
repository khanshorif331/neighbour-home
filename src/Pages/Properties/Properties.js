import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import Property from './Property';

const Properties = ({isLoading, properties}) => {
    if (isLoading) return <Loading />
    return (
        <div className="flex flex-wrap justify-evenly py-8 px-16">
            {
                properties?.map(property => <Property
                     property={property}
                     key={property._id}
                      />)
            }
        </div>
    );
};

export default Properties;