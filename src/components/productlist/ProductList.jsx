import React, { useEffect, useState } from "react";
import ProductService from "../../APIs/services/ProductService";
import { Link } from "react-router-dom";
import "./ProductList.scss";
import Title from "../title/Title";
import ProductCard from "../productcard/ProductCard";

const Product = () => {
  const [products, setProducts] = useState([]);

  const GetAllProduct = async () => {
    setProducts(await ProductService.GetAll());
  };

  useEffect(() => {
    GetAllProduct();
  }, []);

  return (
    <section class="product__list section">
      <div className="container">
        <Title>
          <h3 className="title__head">PRODUCTS</h3>
          <div className="title--action">
            <Link to="/about">SEE ALL</Link>
          </div>
        </Title>
        <div className="product__content">
          {products.slice(0, 8).map((product) => {
            return <ProductCard key={product.id}>{product}</ProductCard>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Product;
