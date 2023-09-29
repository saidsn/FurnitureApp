import React, { useState } from "react";
import "./VerifyForm.scss";
import { Link, useNavigate } from "react-router-dom";
import MainButton from "../../../utils/buttons/mainbutton/MainButton";
import AccountTitle from "../../authtitle/AccountTitle";
import toastr from "react-hot-toast";
import CustomInput from "../../custominput/CustomInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const VerifyForm = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    number: Yup.string()
      .required("verification number is required"),
  });

  const send = (inputvalue) => {
    toastr.success("verification successfull");
    navigate("/auth/resetpassword");
  };
  return (
    <div className="forgot__form">
      <AccountTitle>verification</AccountTitle>
      <Formik
        initialValues={{
          number: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(inputvalue) => send(inputvalue)}
      >
        <Form className="form" action="">
          <CustomInput name="number" placeholder="ENTER VERIFICATION NUMBER" />
          <div className="form__bottom">
            <span>Didn’t receive a code?</span>
            <Link to="/auth/forgotpassword">Resend</Link>
          </div>
          <MainButton type="submit">verify</MainButton>
        </Form>
      </Formik>
    </div>
  );
};

export default VerifyForm;
