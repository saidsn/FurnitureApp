import "./ShoppingCart.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import MainButton from "../../utils/buttons/mainbutton/MainButton";
import React, { useEffect, useState } from "react";
import Title from "../title/Title";
import toast from "react-hot-toast";
import { useBasket } from "../../context/basketContext/BasketContext";

const ShoppingCart = () => {
  const { t } = useTranslation();
  const { basketCount, setBasketCount } = useBasket();
  const [colors, setColors] = useState([]);
  const [userBasket, setUserBasket] = useState([]);
  const [basketProducts, setBasketProducts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUserBasket(
      basketProducts.filter((basketItem) => basketItem.userId === user?.id)
    );
  }, [basketProducts]);

  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem("basket")) || [];
    setBasketProducts(storedBasket);

    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const increaseCount = (index) => {
    const updatedBasket = [...basketProducts];
    updatedBasket[index].count += 1;
    setBasketProducts(updatedBasket);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
  };

  const decreaseCount = (index) => {
    const updatedBasket = [...basketProducts];
    if (updatedBasket[index].count > 1) {
      updatedBasket[index].count -= 1;
      setBasketProducts(updatedBasket);
      localStorage.setItem("basket", JSON.stringify(updatedBasket));
    }
  };

  const deleteBasketItem = (index) => {
    const updatedBasket = [...basketProducts];
    updatedBasket.splice(index, 1);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
    setBasketProducts(updatedBasket);
    toast.success(t("toast.removebasket"));
  };

  const getProductColor = async (colorId) => {
    try {
      await axios
        .get(`http://localhost:3000/colors`)
        .then((res) => setColors(res.data));
    } catch (error) {
      console.error("Error fetching product colors:", error);
    }
  };

  useEffect(() => {
    getProductColor();
  }, []);

  useEffect(() => {
    const itemCount = userBasket.reduce((total, item) => total + item.count, 0);
    setBasketCount(itemCount);
  }, [userBasket]);

  const totalPrice = userBasket.reduce(
    (total, item) => total + item.count * item.product.price,
    0
  );

  return (
    <section className="shopping-cart section">
      <div className="container">
        <Title>
          <h3 className="title__head">{t("title.shoppingcart")}</h3>
        </Title>
        <div className="shopping-cart__content">
          <div className="shopping-cart__content__left">
            {userBasket?.length > 0 ? (
              <ul className="shopping-cart__list">
                {userBasket?.map((basketItem, index) => {
                  const color = colors?.find(
                    (color) => color.id === basketItem.colorId
                  );

                  return (
                    <li className="shopping-cart__list__item" key={index}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        cursor={"pointer"}
                        onClick={() => {
                          deleteBasketItem(index);
                        }}
                      >
                        <path
                          d="M20.8878 19.7376C20.9633 19.8131 21.0232 19.9027 21.064 20.0014C21.1049 20.1 21.1259 20.2057 21.1259 20.3125C21.1259 20.4192 21.1049 20.5249 21.064 20.6236C21.0232 20.7222 20.9633 20.8118 20.8878 20.8873C20.8123 20.9628 20.7227 21.0227 20.6241 21.0635C20.5254 21.1044 20.4197 21.1254 20.313 21.1254C20.2062 21.1254 20.1005 21.1044 20.0019 21.0635C19.9032 21.0227 19.8136 20.9628 19.7381 20.8873L13.0005 14.1486L6.2628 20.8873C6.11034 21.0398 5.90356 21.1254 5.68795 21.1254C5.47234 21.1254 5.26557 21.0398 5.11311 20.8873C4.96065 20.7349 4.875 20.5281 4.875 20.3125C4.875 20.0969 4.96065 19.8901 5.11311 19.7376L11.8518 13L5.11311 6.26231C4.96065 6.10985 4.875 5.90307 4.875 5.68746C4.875 5.47186 4.96065 5.26508 5.11311 5.11262C5.26557 4.96016 5.47234 4.87451 5.68795 4.87451C5.90356 4.87451 6.11034 4.96016 6.2628 5.11262L13.0005 11.8513L19.7381 5.11262C19.8906 4.96016 20.0973 4.87451 20.313 4.87451C20.5286 4.87451 20.7353 4.96016 20.8878 5.11262C21.0403 5.26508 21.1259 5.47186 21.1259 5.68746C21.1259 5.90307 21.0403 6.10985 20.8878 6.26231L14.1491 13L20.8878 19.7376Z"
                          fill="#2D2D2B"
                        />
                      </svg>
                      <div className="cart">
                        <div className="cart__image">
                          <Link
                            to={`/productdetail/${basketItem.product.id}/${basketItem.product.title}`}
                          >
                            <img
                              src={basketItem.product.image}
                              alt="cartiamge"
                            />
                          </Link>
                        </div>
                        <p className="cart__title">
                          {basketItem.product.title}
                        </p>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                      >
                        <ellipse
                          cx="9"
                          cy="9.42857"
                          rx="9"
                          ry="9.42857"
                          fill={color?.name}
                        />
                      </svg>
                      <div className="count__area">
                        <span
                          className="minus"
                          onClick={() => decreaseCount(index)}
                        >
                          -
                        </span>
                        <span className="count">{basketItem.count}</span>
                        <span
                          className="plus"
                          onClick={() => increaseCount(index)}
                        >
                          +
                        </span>
                      </div>
                      <span className="price">
                        {basketItem.count * basketItem.product.price}$
                      </span>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <h3 className="empty">{t("shoppingcart.empty")}</h3>
            )}
          </div>
          <div className="shopping-cart__content__right">
            <div className="summary">
              <h2 className="summary__title">{t("shoppingcart.summary")}</h2>
              <ul className="summary__list">
                <li className="summary__list__item">
                  <span>{t("shoppingcart.itemcount")}</span>
                  <span className="totalCount">{basketCount}</span>
                </li>
                <li className="summary__list__item">
                  <span>{t("shoppingcart.totalprice")}</span>
                  <span className="totalPrice">{totalPrice} $</span>
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
              {user ? (
                <MainButton>{t("mainbutton.shoppingcart")}</MainButton>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <Link to="/products">
          <p className="back">{t("shoppingcart.backtoshopping")}</p>
        </Link>
      </div>
    </section>
  );
};

export default ShoppingCart;
