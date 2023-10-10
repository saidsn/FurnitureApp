import React from "react";
import "./Counter.scss";
import { useTranslation } from "react-i18next";

const Counter = () => {

  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="counter">
        <div className="counter__item">
          <h2 className="counter__item--title">500+</h2>
          <p className="counter__item--text">{t("counter.projects")}</p>
        </div>
        <div className="counter__item">
          <h2 className="counter__item--title">70+</h2>
          <p className="counter__item--text">{t("counter.partners")}</p>
        </div>
        <div className="counter__item">
          <h2 className="counter__item--title">30K+</h2>
          <p className="counter__item--text">{t("counter.followers")}</p>
        </div>
        <div className="counter__item">
          <h2 className="counter__item--title">25+</h2>
          <p className="counter__item--text">{t("counter.years")}</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
