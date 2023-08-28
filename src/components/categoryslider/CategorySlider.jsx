import React, { useEffect, useState } from "react";
import "./CategorySlider.scss";
import SlickSlider from "../slider/Slider";
import axios from "axios";

const CategorySlider = ({ slidesToShow }) => {
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

  const url = "http://localhost:3000";

  const [categories, setCategories] = useState([]);

  const GetCategory = () => {
    axios.get(`${url}/categories`).then((res) => {
      setCategories(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    GetCategory();
  }, []);

  return (
    <section id="category__slider">
      <div className="container">
        <SlickSlider settings={settings}>
          {categories.map((category) => {
            return (
              <div className="category__slider--item" key={category.id}>
                <img src={category.image} alt="" />
                <p className="category__name">{category.name}</p>
              </div>
            );
          })}
        </SlickSlider>
      </div>
    </section>
  );
};

export default CategorySlider;
