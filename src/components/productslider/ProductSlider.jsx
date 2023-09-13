import React, { useEffect, useState } from "react";
import ProductCard from "../productcard/ProductCard";
import ProductService from "../../APIs/services/ProductService";
import "./ProductSlider.scss";
import SlickSlider from "../slider/Slider";
import Title from "../title/Title";

import axios from "axios";

const ProductSlider = ({ slidesToShow }) => {
  const settings = {
    slidesToShow: slidesToShow,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 2,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  const [products, setProducts] = useState([]);

  const GetAllProduct = async () => {
    setProducts(await ProductService.GetAll());
  };

  useEffect(() => {
    GetAllProduct();
  }, []);

  return (
    <section className="product__slider section">
      <div className="container">
        <Title>
          <h3 className="title__head">MOST POPULAR</h3>
        </Title>
        <SlickSlider settings={settings}>
          {products.slice(0, 6).map((product) => {
            return <ProductCard key={product.id} props = {product}/>;
          })}
        </SlickSlider>
      </div>
    </section>
  );
};

export default ProductSlider;
