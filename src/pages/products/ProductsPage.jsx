import React from "react";
import BredCrumbs from "../../components/bredcrumbs/BredCrumbs";
import Title from "../../components/title/Title";
import ProductHeader from "../../components/productheader/ProductHeader";

const ProductsPage = () => {
  return (
    <div className="container">
      <BredCrumbs />
      <Title title="PRODUCTS" />
      <ProductHeader>
        Et harum quidem rerum facilis est et expedita distinctio. Nam libero
        tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
        minus id quod maxime.
      </ProductHeader> 
    </div>
  );
};

export default ProductsPage;
