import React from "react";
import "./CategoryCard.scss";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({children, type}) => {
  const navigate = useNavigate();

  const HandleNavigate = ()=>{

    if (type == "category") {
      navigate(
        `/products?categoriesIds=${children.id}&collectionsIds=`
      );
      
    }
    else if (type == "collections") {
      navigate(
        `/products?categoriesIds=&collectionsIds=${children.id}`
      );
    }
  }

  return (
    <div className="card" onClick={HandleNavigate}>
      <img src={children.image} alt="" />
      <p className="card__name">{children.name}</p>
    </div>
  );
};

export default CategoryCard;
