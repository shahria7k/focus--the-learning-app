import React from 'react';
import Banner from '../Banner/Banner';

import Courses from '../Courses/Courses';

const Home = () => {
    return (
        <>
            <Banner></Banner>

            <Courses count={6}></Courses>
        </>
    );
};

export default Home;