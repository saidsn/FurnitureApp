import React from "react";
import "./ProductSlider.scss";
import SlickSlider from "../slider/Slider";
import ProductCard from "../productcard/ProductCard";
import Title from "../title/Title";

const ProductSlider = ({slidesToShow}) => {
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

  return (
    <section id="Product">
      <div className="container">
      <Title title="MOST POPULAR" />
        <SlickSlider settings={settings}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
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
      </div>
    </section>
  );
};

export default ProductSlider;
