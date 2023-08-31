import React from "react";
import BredCrumbs from "../../components/bredcrumbs/BredCrumbs";
import Title from "../../components/title/Title";
import Head from "../../components/head/Head";

const ProductsPage = () => {
  return (
    <>
      <BredCrumbs />
      <Title>
        <h3 className="title__head">PRODUCTS</h3>
      </Title>
      <Head>
        <p className="header--text">
          Et harum quidem rerum facilis est et expedita distinctio. Nam libero
          tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
          minus id quod maxime.
        </p>
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
      </Head>
    </>
  );
};

export default ProductsPage;
