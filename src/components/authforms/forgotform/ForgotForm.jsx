import React, { useState } from "react";
import "./ForgotForm.scss";
import { Link, useNavigate } from "react-router-dom";
import MainButton from "../../../utils/buttons/mainbutton/MainButton";
import AccountTitle from "../../authtitle/AccountTitle";
import toast from "react-hot-toast";
import CustomInput from "../../custominput/CustomInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

const ForgotForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Enter a valid email address.")
      .required("email is required"),
  });

  const send = (inputvalue) => {
    toast.success(t("toast.send"));
    navigate("/auth/verification");
  };

  return (
    <div className="forgot__form">
      <AccountTitle>{t("authforms.gorgotform.title")}</AccountTitle>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(inputvalue) => send(inputvalue)}
      >
        <Form className="form" action="">
          <CustomInput
            type="email"
            name="email"
            placeholder={t("authforms.gorgotform.email")}
          />
          <MainButton type="submit">{t("mainbutton.send")}</MainButton>
        </Form>
      </Formik>
      <div className="form__bottom">
        <span>{t("authforms.gorgotform.account")}</span>
        <Link to="/auth/register">{t("authforms.gorgotform.register")}</Link>
      </div>
    </div>
  );
};

export default ForgotForm;
