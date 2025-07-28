import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "./en.json"
import he from "./he.json"
import pt from "./pt.json"

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            he: { translation: he },
            pt: { translation: pt },
        },
        fallback: "en",

        // better to add:
        interpolation: {
            escapeValue: false,
        }
    })

export default i18n;