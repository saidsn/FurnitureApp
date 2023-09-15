import React from "react";
import "./RegisterForm.scss";
import { Link } from "react-router-dom";
import MainButton from "../../../utils/buttons/mainbutton/MainButton";
import AccountTitle from "../../accountTitle/AccountTitle";

const RegisterForm = () => (
  <>
    <div className="register__form">
      <AccountTitle>Register</AccountTitle>
      <form className="form" action="">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <MainButton>REGISTER</MainButton>
      </form>
      <div className="form__bottom">
        <span>Already have an account?</span>
        <Link>Log in</Link>
      </div>
    </div>
  </>
);

export default RegisterForm;
