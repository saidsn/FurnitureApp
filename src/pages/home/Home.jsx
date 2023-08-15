import React from 'react';
import MainHeader from '../../components/mainheader/MainHeader';
import Slider from '../../components/slider/Slider';
import About from '../../components/about/About';

const Home = () => {
    return (
        <>
            <MainHeader />
            <Slider />
            <About />
        </>
    )
}

export default Home;