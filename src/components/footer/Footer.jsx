import React, { useEffect, useState } from "react";
import FooterService from "../../APIs/services/FooterService";
import "./Footer.scss";

const Footer = () => {

  const [footer, setFooter] = useState("");

  const GetAllFooter = async () => {
      setFooter(await FooterService.GetAll());
  };

  useEffect(() => {
    GetAllFooter();
  },"");

  return (
    <section class="footer__section">
      <div className="container">
        <div className="footer">
          <div className="footer__left">
            <p className="footer__left--title">HomeDecor</p>
            <p className="footer__left--copyright">
              ©2022 All Right Reserved. Developed by Webcoder Agency
            </p>
          </div>
          <div className="footer__right">
            <p className="footer__right--desc">{footer.description}</p>
            <p className="footer__right--phone">{footer.phone}</p>
            <p className="footer__right--email">{footer.email}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
