import React from 'react';
import Properties from './Properties';
import PropertySearchBar from './PropertySearchBar';

const PropertiesPage = () => {
     return (
          <div style={{ fontFamily: "'Rajdhani', sans-serif" }} className='mt-[129px]'>
               <PropertySearchBar></PropertySearchBar>
               <Properties></Properties>
          </div>
     );
};

export default PropertiesPage;