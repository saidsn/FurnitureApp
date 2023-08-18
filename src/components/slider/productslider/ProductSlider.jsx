import React from 'react';
import './ProductSlider.scss';
import Slider from "react-slick";
import ProductCart from '../../productcart/ProductCart';

const ProductSlider = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    rules: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
          arrows: false,
          dots: true
        }
      },
    ]
  };
  return (
    <div className="container">
      <h3 className='title'>MOST POPULAR</h3>
      <Slider className='slider' {...settings}>
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </Slider>
    </div>
  )
}

export default ProductSlider;