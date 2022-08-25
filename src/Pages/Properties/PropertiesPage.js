import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Properties from './Properties';
import PropertySearchBar from './PropertySearchBar';

const PropertiesPage = () => {
     const { isLoading, error, data: properties, refetch } = useQuery(['properties'], () =>
        fetch('https://neighbour-home--server.herokuapp.com/sellPost').then(
            res => res.json()
        )
    )
     return (
          <div style={{ fontFamily: "'Rajdhani', sans-serif" }} className='mt-[129px]'>
               <PropertySearchBar refetch={refetch}></PropertySearchBar>
               <Properties properties={properties} isLoading={isLoading}></Properties>
          </div>
     );
};

export default PropertiesPage;