import React from "react";
import "./AccountTitle.scss";

const AccountTitle = ({ children }) => {
  return (
    <>
      <h3 className="title">{children}</h3>
    </>
  );
};

export default AccountTitle;
