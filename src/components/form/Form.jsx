import React from "react";
import "./Form.scss";
import MainButton from "../../utils/buttons/mainbutton/MainButton";

const Form = () => {
  return (
    <>
    <div className="form">
      <form className="form" action="">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <MainButton>SAVE CHANGES</MainButton>
      </form>
    </div>
    </>
  );
};

export default Form;
