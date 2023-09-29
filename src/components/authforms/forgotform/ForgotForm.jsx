import React, { useState } from "react";
import "./ForgotForm.scss";
import { Link, useNavigate } from "react-router-dom";
import MainButton from "../../../utils/buttons/mainbutton/MainButton";
import AccountTitle from "../../authtitle/AccountTitle";
import toast from "react-hot-toast";
import CustomInput from "../../custominput/CustomInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const ForgotForm = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Enter a valid email address.")
      .required("email is required"),
  });

  const send = (inputvalue) => {
    toast.success("send successful");
    navigate("/auth/verification");
  };

  return (
    <div className="forgot__form">
      <AccountTitle>reset password</AccountTitle>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(inputvalue) => send(inputvalue)}
      >
        <Form className="form" action="">
          <CustomInput type="email" name="email" placeholder="E-MAIL ADRESS" />
          <MainButton type="submit">send</MainButton>
        </Form>
      </Formik>
      <div className="form__bottom">
        <span>Don’t have an account?</span>
        <Link to="/auth/register">Register</Link>
      </div>
    </div>
  );
};

export default ForgotForm;
