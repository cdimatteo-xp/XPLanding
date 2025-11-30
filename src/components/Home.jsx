import React from 'react';
import Hero from './Hero';
import Services from './Services';
import ProductsSummary from './ProductsSummary';
import TrainingSummary from './TrainingSummary';
import Industries from './Industries';
import About from './About';
import Careers from './Careers';

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <ProductsSummary />
            <Industries />
            <TrainingSummary />
            <About />
            <Careers />
        </>
    );
};

export default Home;
