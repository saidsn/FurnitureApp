import React from "react";
import "./ProductHeader.scss";

const ProductHeader = ({ children }) => {
  return (
    <div className="product__header">
      <p className="product__header--text">{children}</p>
      <div class="dropdown">
        <button class="dropbtn btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4 16L13 16"
              stroke="#B8926A"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M6 11H13"
              stroke="#B8926A"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M8 6L13 6"
              stroke="#B8926A"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M17 4L17 20L20 16"
              stroke="#B8926A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          SORT BY
        </button>
        <div class="dropdown-content">
          <a href="#">POPULAR FIRST</a>
          <a href="#">CHEAPEST FIRST</a>
          <a href="#">EXPENSIVE FIRST</a>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
