import React from "react";
import "./ShoppingCart.scss";
import Title from "../title/Title";

const ShoppingCart = () => {
  return (
    <section className="shopping-cart section">
      <div className="container">
        <Title>
          <h3 className="title__head">Shopping Cart</h3>
        </Title>
        <div className="shopping-cart__content">
          <div className="shopping-cart__content__left">
            <ul className="shopping-cart__list">
              <li className="shopping-cart__list__item">ol</li>
              <li className="shopping-cart__list__item">ol</li>
              <li className="shopping-cart__list__item">ol</li>
            </ul>
          </div>
          <div className="shopping-cart__content__right">
            <div className="summary">
              <h2 className="summary__title">SUMMARY</h2>
              <ul className="summary__list">
                <li className="summary__list__item">
                  <span>ITEM COUNT</span>
                  <span>4</span>
                </li>
                <li className="summary__list__item">
                  <span>TOTAL PRICE</span>
                  <span>460&</span>
                </li>
                <li className="summary__list__item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="272"
                    height="2"
                    viewBox="0 0 272 2"
                    fill="none"
                  >
                    <path
                      d="M1 1L271 1"
                      stroke="#EAE6DF"
                      strokeLinecap="round"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
