import React from "react";
import MainHeader from "../../components/mainheader/MainHeader";
import About from "../../components/about/About";
import Discount from "../../components/discount/Discount";
import Product from "../../components/product/Product";
import Contact from "../../components/contact/Contact";
import Title from "../../components/title/Title";
import SlickSlider from "../../components/slider/Slider";
import CategoryCard from "../../components/categorycard/CategoryCard";
import ProductCard from "../../components/productcard/ProductCard";
const HomePage = () => {
  return (
    <>
      <MainHeader />
      <SlickSlider slidesToShow={4}>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </SlickSlider>
      <Title title="ABOUT US" />
      <About showButton={true}/>
      <Discount />
      <Title title="PRODUCTS" />
      <Product />
      <Title title="MOST POPULAR" />
      <SlickSlider slidesToShow={4}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </SlickSlider>
      <Title title="COLLECTION" />
      <SlickSlider slidesToShow={3}>
      <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </SlickSlider>
      <Title title="CONTACT" />
      <Contact />
    </>
  );
};

export default HomePage;
