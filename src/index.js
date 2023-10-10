import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { LangProvider } from "./context/langcontext/LangContext";
import i18n from "./components/translate/i18n";
import { I18nextProvider } from "react-i18next";
import { BasketProvider } from "./context/basketContext/BasketContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <I18nextProvider i18n={i18n}>
    <BasketProvider>
      <React.StrictMode>
        <LangProvider>
          <App />
        </LangProvider>
      </React.StrictMode>
    </BasketProvider>
  </I18nextProvider>
);
