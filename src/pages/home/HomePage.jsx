import React from 'react';
import MainHeader from '../../components/mainheader';
import CategorySlider from '../../components/slider/categoryslider';
import About from '../../components/about/';
import Discount from '../../components/discount';
import Product from '../../components/product';
import ProductSlider from '../../components/slider/productslider';
import Contact from '../../components/contact';
import Title from '../../components/title';

const HomePage = () => {
    return (
        <>
            <MainHeader />
            <CategorySlider slidesCount = {4} />
            <Title title = 'ABOUT US'/>
            <About />
            <Discount />
            <Title title = 'PRODUCTS'/>
            <Product />
            <Title title = 'MOST POPULAR'/>
            <ProductSlider />
            <Title title = 'COLLECTION'/>
            <CategorySlider slidesCount = {3}/>
            <Title title = 'CONTACT'/>
            <Contact />
        </>
    )
}

export default HomePage;