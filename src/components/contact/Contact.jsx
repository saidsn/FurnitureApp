import React, { useEffect, useState } from "react";
import "./Contact.scss";
import ContactService from "../../APIs/services/ContactService";
import MainButton from "../../utils/buttons/mainbutton/MainButton";
import Title from "../title/Title";

const Contact = () => {
  const [contact, setContact] = useState("");

  const GetAllContact = async () => {
    setContact(await ContactService.GetAll());
  };

  useEffect(() => {
    GetAllContact();
  }, []);

  return (
    <section id="contact">
      <div className="container">
        <Title>
          <h3 className="title__head">CONTACT</h3>
        </Title>
        <div className="contact__content">
          <div className="contact__content--left">
            <div className="contact__content--form">
              <input type="text" placeholder="NAME, SURNAME" />
              <input type="email" placeholder="E-MAIL ADRESS" />
              <input type="text" placeholder="THEME" />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="YOUR MESSAGE"
              ></textarea>
            </div>
            <MainButton>SEND</MainButton>
          </div>
          <div className="contact__content--right">
            <img src={contact.image} alt="contactimage" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// const url = "http://localhost:3000";

// const [contact, setContact] = useState("");

// const GetContact = async () => {
//   await axios.get(`${url}/contact`).then((res) => {
//     setContact(res.data);
//     console.log(res.data);
//   });
// };

// useEffect(() => {
//   GetContact();
// });
