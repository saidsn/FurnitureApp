import React, { createContext, useContext, useEffect, useState } from "react";
import i18n from "../../components/translate/i18n";

const LangContext = createContext();

export const LangProvider = ({ children }) => {
  
  const [language, setLanguage] = useState("en");
  const selectLanguage = JSON.parse(localStorage.getItem("language"));

  const changeLanguage = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
    localStorage.setItem("language", JSON.stringify(newLanguage));
  };

  useEffect(() => {
    if (selectLanguage) {
      changeLanguage(selectLanguage);
    }
  }, [language]);

  return (
    <LangContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);

