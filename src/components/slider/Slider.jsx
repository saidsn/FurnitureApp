import React from "react";
import "./Slider.scss";
import Slider from "react-slick";

const SlickSlider = ({ children, slidesToShow }) => {
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
    <div className="container">
      <Slider
        nextArrow={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 4L20 12L12 20L10.575 18.6L16.175 13H4V11H16.175L10.575 5.4L12 4Z"
              fill="#EEF0F2"
            />
          </svg>
        }
        prevArrow={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825L13.425 18.6L12 20Z"
              fill="#EEF0F2"
            />
          </svg>
        }
        {...settings}
      >
        {children}
      </Slider>
    </div>
  );
};

export default SlickSlider;
