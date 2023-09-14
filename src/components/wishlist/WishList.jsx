import React, { useEffect, useState } from "react";
import "./WishList.scss";
import toast from "react-hot-toast";

const WishList = () => {
  let wishlistLocal = JSON.parse(localStorage.getItem("wishList"));
  const [wishlist, setWishlist] = useState(wishlistLocal || []);
  const [filterWishlist, setFilterWishlist] = useState(wishlist);

  const deleteWishlistItem = (id) => {
    let wishlistLocal = JSON.parse(localStorage.getItem("wishList"));
    const newWishlist = wishlistLocal.filter((wishlistItem, index) => index !== id);
    localStorage.setItem("wishList", JSON.stringify(newWishlist));
    setWishlist(newWishlist);
    setFilterWishlist(newWishlist);
    toast.success("Wishlist deleted");
  };


  return (
    <div className="wishlist_area">
      {filterWishlist.length > 0 ? (
        <ul className="wishlist">
          {filterWishlist.map((wishlistItem, id) => {
            return (
              <li className="wishlist__item" key={id}>
                <div className="wishlist__item__image">
                  <img src={wishlistItem.image} alt="" />
                </div>
                <div className="wishlist__item__content">
                  <div className="wishlist__item__content__title">
                    <p>{wishlistItem.title}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      cursor="pointer"
                      onClick={() => deleteWishlistItem(id)}
                    >
                      <path
                        d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
                        fill="#B8926A"
                      />
                    </svg>
                  </div>
                  <div className="wishlist__item__content__price">
                    <span>{wishlistItem.price}$</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="text-danger">
          <h3>Wishlist Empty Yet</h3>
        </div>
      )}
    </div>
  );
};

export default WishList;
