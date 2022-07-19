import React from 'react';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import Contact from '../Contact/Contact';
import Guide from '../Guide/Guide';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Guide/>
            <Cards/>
            <Contact/>
        </div>
    );
};

export default Home;