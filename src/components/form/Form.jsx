import React from "react";
import "./Form.scss";
import MainButton from "../../utils/buttons/mainbutton/MainButton";

const Form = () => {
  let localUser = JSON.parse(localStorage.getItem("user"));
  const { name, surname, email, password } = localUser;
  
  return (
    <>
      <div className="form">
        <form className="form" action="">
          <input type="text" value={name} />
          <input type="text" value={surname} />
          <input type="mail" value={email} />
          <input type="password" value={password} />
          <MainButton>SAVE CHANGES</MainButton>
        </form>
      </div>
    </>
  );
};

export default Form;
