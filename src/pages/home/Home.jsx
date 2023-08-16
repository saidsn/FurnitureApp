import React from 'react';
import MainHeader from '../../components/mainheader/MainHeader';
import Slider from '../../components/slider/categoryslider/CategorySlider';
import About from '../../components/about/About';
import Discount from '../../components/discount/Discount';
import Product from '../../components/product/Product';

const Home = () => {
    return (
        <>
            <MainHeader />
            <Slider />
            <About />
            <Discount />
            <Product />
        </>
    )
}

export default Home;