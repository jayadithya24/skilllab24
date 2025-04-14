// src/pages/Home.js
import React from 'react';
import HeroBanner from '../components/HeroBanner';
import PopularDishes from '../components/PopularDishes';
import Testimonials from '../components/Testimonials';
import Offers from '../components/Offers';

const Home = () => {
    return (
        <div>
            <HeroBanner />
            <PopularDishes />
            <Testimonials />
            <Offers />
        </div>
    );
};

export default Home;