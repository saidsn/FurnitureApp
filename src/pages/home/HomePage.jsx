import React, {useEffect, useState } from "react";
import MainHeader from "../../components/mainheader/MainHeader";
import About from "../../components/about/About";
import Discount from "../../components/discount/Discount";
import Product from "../../components/product/Product";
import Contact from "../../components/contact/Contact";
import ProductSlider from "../../components/productslider/ProductSlider";
import CategorySlider from "../../components/categoryslider/CategorySlider";
import CollectionSlider from "../../components/collectionslider/CollectionSlider";

const HomePage = () => {
  
  return (
    <>
      <MainHeader />
      <CategorySlider slidesToShow={4} />
      <About showButton={true} />
      <Discount />
      <Product />
      <ProductSlider slidesToShow={4} />
      <CollectionSlider slidesToShow={3} />
      <Contact />
    </>
  );
};

export default HomePage;
