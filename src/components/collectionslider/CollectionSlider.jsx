import React from "react";
import "./CollectionSlider.scss";
import SlickSlider from "../slider/Slider";
import Title from "../title/Title";

const CollectionSlider = ({ slidesToShow }) => {
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
    <section id="collection">
      <div className="container">
      <Title title="COLLECTION" />
        <SlickSlider settings={settings}>

        </SlickSlider>
      </div>
    </section>
  );
};

export default CollectionSlider;
