import React, { useEffect, useState } from "react";
import ProductCard from "../productcard/ProductCard";
import ProductService from "../../APIs/services/ProductService";
import "./ProductSlider.scss";
import SlickSlider from "../slider/Slider";
import Title from "../title/Title";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();

  const [products, setProducts] = useState([]);

  const GetAllProducts = async () => {
    setProducts(await ProductService.getAllProduct());
  };

  useEffect(() => {
    GetAllProducts();
  }, []);

  return (
    <section className="product__slider section">
      <div className="container">
        <Title>
          <h3 className="title__head">{ t("title.mostpopular")}</h3>
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
