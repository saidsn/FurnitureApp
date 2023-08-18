import React from 'react';
import MainHeader from '../../components/mainheader/MainHeader';
import CategorySlider from '../../components/slider/categoryslider/CategorySlider';
import About from '../../components/about/About';
import Discount from '../../components/discount/Discount';
import Product from '../../components/product/Product';
import ProductSlider from '../../components/slider/productslider/ProductSlider';
import Contact from '../../components/contact/Contact';

const HomePage = () => {
    return (
        <>
            <MainHeader />
            <CategorySlider />
            <About />
            <Discount />
            <Product />
            <ProductSlider />
            {/* <CategorySlider /> */}
            <Contact />
        </>
    )
}

export default HomePage;