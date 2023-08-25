import React from "react";
import "./SecondaryButton.scss";

const SecondaryButton = ({children}) => {
  return <button className="button btn">{children}</button>;
};

export default SecondaryButton;
