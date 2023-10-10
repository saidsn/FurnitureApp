import React, { useEffect, useState } from "react";
import FooterService from "../../APIs/services/FooterService";
import "./Footer.scss";
import { useTranslation } from "react-i18next";
import { useLang } from "../../context/langcontext/LangContext";

const Footer = () => {
  const { language } = useLang();
  const { t } = useTranslation();

  const [footer, setFooter] = useState([]);

  const GetAllFooter = async () => {
    setFooter(await FooterService.getAllFooter());
  };

  useEffect(() => {
    GetAllFooter();
  }, []);

  return (
    <section className="footer__section">
      <div className="container">
        <div className="footer">
          <div className="footer__left">
            <p className="footer__left--title">HomeDecor</p>
            <p className="footer__left--copyright">{t("copyright")}</p>
          </div>
          <div className="footer__right">
            <p className="footer__right--desc">
              {language === "az"
                ? footer.descriptionAz
                : language === "ru"
                ? footer.descriptionRu
                : footer.description}
            </p>
            <p className="footer__right--phone">{footer.phone}</p>
            <p className="footer__right--email">{footer.email}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
