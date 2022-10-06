import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-http-backend";

// import "./i18n"; // exporto el componente
import enTranslation from "./i18n/en.json";
import esTranslation from "./i18n/es.json";
import prTranslation from "./i18n/pr.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  es: {
    translation: esTranslation,
  },
  pr: {
    translation: prTranslation,
  },
  pt: {
    translation: prTranslation,
  }
};

const languages = ["en", "es", "pr", "pt"];

i18next
  .use(XHR)
  .use(LanguageDetector)
  .init({
    detection: { order: ["path", "navigator"] },
    fallbackLng: (navigator.language),
    resources: resources,
    whitelist: languages,
    keySeparator: false, //sirve para utilizar objetos dentro de la sesión
    interpolation: {
      // este es comando de interpolación, en el ejemplo no lo utiliza
      escapeValue: false,
    },
  });

  console.log(navigator.language);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
