import React from "react";
import "./MainButton.scss";

const MainButton = ({ children,disabled}) => {
  return <button disabled={disabled} className="main__button btn">{children}</button>;
};

export default MainButton;

