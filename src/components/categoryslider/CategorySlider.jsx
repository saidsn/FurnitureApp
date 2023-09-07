import React, { useEffect, useState } from "react";
import CategoryService from "../../APIs/services/CategoryService";
import "./CategorySlider.scss";
import SlickSlider from "../slider/Slider";
import CategoryCard from "../categorycard/CategoryCard";

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

  const [categories, setCategories] = useState([]);

  const GetAllCategory = async () => {
    setCategories(await CategoryService.GetAll());
  };

  useEffect(() => {
    GetAllCategory();
  }, []);

  return (
    <section class="category__slider section">
      <div className="container">
        <SlickSlider settings={settings}>
          {categories.map((category) => {
            return <CategoryCard key={category.id} type = "category">{category}</CategoryCard>;
          })}
        </SlickSlider>
      </div>
    </section>
  );
};

export default CategorySlider;
