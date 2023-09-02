import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductList.scss";
import Title from "../title/Title";
import ProductCard from "../productcard/ProductCard";

const Product = ({ take, products }) => {
  return (
    <section class="product__list section">
      <div className="container">
        <div className="product__content">
          {products?.slice(0, take).map((product) => {
            return <ProductCard key={product.id}>{product}</ProductCard>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Product;
