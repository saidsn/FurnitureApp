import React from "react";
import "./Head.scss";

const ProductHeader = ({ children }) => {
  return (
    <section className="head">
      <div className="container">
        <div className="header">{children}</div>
      </div>
    </section>
  );
};

export default ProductHeader;
