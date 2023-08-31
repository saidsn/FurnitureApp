import React from "react";
import "./CategoryCard.scss";

const CategoryCard = ({children}) => {
  return (
    <div className="card">
      <img src={children.image} alt="" />
      <p className="card__name">{children.name}</p>
    </div>
  );
};

export default CategoryCard;
