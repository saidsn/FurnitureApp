import React, { useState } from "react";
import "./VerifyForm.scss";
import { Link, useNavigate } from "react-router-dom";
import MainButton from "../../../utils/buttons/mainbutton/MainButton";
import AccountTitle from "../../authtitle/AccountTitle";
import toastr from "react-hot-toast";
import CustomInput from "../../custominput/CustomInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

const VerifyForm = () => {

  const { t } = useTranslation();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    number: Yup.string()
      .required("verification number is required"),
  });

  const send = (inputvalue) => {
    toastr.success(t("toast.verification"));
    navigate("/auth/resetpassword");
  };
  return (
    <div className="forgot__form">
      <AccountTitle>{t("authforms.verifyform.title")}</AccountTitle>
      <Formik
        initialValues={{
          number: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(inputvalue) => send(inputvalue)}
      >
        <Form className="form" action="">
          <CustomInput
            name="number"
            placeholder={t("authforms.verifyform.code")}
          />
          <div className="form__bottom">
            <span>{t("authforms.verifyform.recieve")}</span>
            <Link to="/auth/forgotpassword">
              {t("authforms.verifyform.resend")}
            </Link>
          </div>
          <MainButton type="submit">
            {t("mainbutton.verify")}
          </MainButton>
        </Form>
      </Formik>
    </div>
  );
};

export default VerifyForm;
