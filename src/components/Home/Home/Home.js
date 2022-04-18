import React from 'react';
import Banner from '../Banner/Banner';
// import Course from '../Course/Course';
import Courses from '../Courses/Courses';
import Promotion from '../Promotion/Promotion';

const Home = () => {
    return (
        <div>
            <Banner />
            <Courses />
            <Promotion />
        </div>
    );
};

export default Home;