import React, { useEffect, useState } from "react";
import "./Contact.scss";
import ContactService from "../../APIs/services/ContactService";
import MainButton from "../../utils/buttons/mainbutton/MainButton";
import Title from "../title/Title";
import { useTranslation } from "react-i18next";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomInput from "../custominput/CustomInput";
import toast from "react-hot-toast";
import CustomTextArea from "../customtextarea/CustomTextArea";
import Alert from "../alert/Alert";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z]+$/, "Name must contain only letters.")
    .required("The name field is required."),
  surname: Yup.string()
    .matches(/^[A-Za-z]+$/, "Surname must contain only letters.")
    .required("The surname field is required."),
  email: Yup.string()
    .email("Enter a valid email address.")
    .required("The email field is required."),
  message: Yup.string().required("The message field is required."),
});

const Contact = () => {
  const { t } = useTranslation();
  const [contact, setContact] = useState("");
  const [show, setShow] = useState(false);

  const GetAllContacts = async () => {
    setContact(await ContactService.getAllContact());
  };

  useEffect(() => {
    GetAllContacts();
  }, []);

  const send = async (inputvalue) => {
    try {
      const newContact = {
        name: inputvalue.name,
        surname: inputvalue.surname,
        email: inputvalue.email,
        message: inputvalue.message,
      };
      console.log("newContact", newContact);
      toast.success(t("toast.send"));
      setShow(true);
    } catch (error) {
      console.log(error);
      toast.error("send error");
    }
  };

  return (
    <section className="contact section">
      <div className="container">
        <Title>
          <h3 className="title__head">{t("title.contact")}</h3>
        </Title>
        <div className="contact__content">
          <div className="contact__content--left">
            <Formik
              initialValues={{
                name: "",
                surname: "",
                email: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(inputvalue) => {
                send(inputvalue);
              }}
            >
              <Form className="contact__content--form">
                <CustomInput
                  type="text"
                  name="name"
                  placeholder={t("forminput.placeholder.name")}
                />
                <CustomInput
                  type="text"
                  name="surname"
                  placeholder={t("forminput.placeholder.surname")}
                />
                <CustomInput
                  type="email"
                  name="email"
                  placeholder={t("forminput.placeholder.email")}
                />
                <CustomTextArea
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder={t("forminput.placeholder.textarea")}
                />
                <MainButton type="submit">{t("mainbutton.contact")}</MainButton>
              </Form>
            </Formik>
          </div>
          <div className="contact__content--right">
            <img src={contact.image} alt="contactimage" />
          </div>
          {show && <Alert setShow={setShow} />}
        </div>
      </div>
      <div className={`${show ? "background" : ""}`}></div>
    </section>
  );
};

export default Contact;
