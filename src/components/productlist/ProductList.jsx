import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductList.scss";
import ProductCard from "../productcard/ProductCard";
import { useLocation } from "react-router-dom";

const Product = ({ take, products }) => {

  const location = useLocation();
  return (
    <section class="product__list section">
      <div className={`${location.pathname == "/" ? "container" : ""}`}>
        <div className="product__content">
          {products?.slice(0, take).map((product) => {
            return <ProductCard key={product.id} props = {product}/>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Product;
