import React from "react";
import "./CategoryCard.scss";
import { useNavigate } from "react-router-dom";
import { useLang } from "../../context/langcontext/LangContext";

const CategoryCard = ({ children, type }) => {

  const navigate = useNavigate();

  const { language } = useLang();

  const HandleNavigate = () => {
    if (type === "category") {
      navigate(`/products?categoriesIds=${children.id}&collectionsIds=`);
    } else if (type === "collections") {
      navigate(`/products?categoriesIds=&collectionsIds=${children.id}`);
    }
  };

  return (
    <div className="card" onClick={HandleNavigate}>
      <img src={children.image} alt="" />
      <p className="card__name">{language === "az" ? children.nameAz : language === "ru" ? children.nameRu : children.name}</p>
    </div>
  );
};

export default CategoryCard;
