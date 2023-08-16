import React from 'react';
import MainHeader from '../../components/mainheader/MainHeader';
import Slider from '../../components/slider/Slider';
import About from '../../components/about/About';
import Discount from '../../components/discount/Discount';

const Home = () => {
    return (
        <>
            <MainHeader />
            <Slider />
            <About />
            <Discount />
        </>
    )
}

export default Home;