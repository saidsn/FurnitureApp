import React, { useEffect, useState } from "react";
import CollectionService from "../../APIs/services/CollectionService";
import { Link } from "react-router-dom";
import "./CollectionSlider.scss";
import SlickSlider from "../slider/Slider";
import Title from "../title/Title";
import CategoryCard from "../categorycard/CategoryCard";

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

  const [collections, setCollections] = useState([]);

  const GetAllCollections = async () => {
    setCollections(await CollectionService.getAllCollection());
  };

  useEffect(() => {
    GetAllCollections();
  }, []);

  return (
    <section className="collection__slider section">
      <div className="container">
        <Title>
          <h3 className="title__head">COLLECTIONS</h3>
          <div className="title--action">
            <Link to="/about">SEE ALL</Link>
          </div>
        </Title>
        <SlickSlider settings={settings}>
          {collections.slice(0, 6).map((collection) => {
            return (
              <CategoryCard key={collection.id} type="collections">
                {collection}
              </CategoryCard>
            );
          })}
        </SlickSlider>
      </div>
    </section>
  );
};

export default CollectionSlider;
