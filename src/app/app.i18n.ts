import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// English
import en from '../assets/locales/en.json';
// Spanish
import es from '../assets/locales/es.json';

export enum Language {
  English = 'en',
  Spanish = 'es'
}

const resources = {
  [Language.English]: {
    translation: en
  },
  [Language.Spanish]: {
    translation: es
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: Language.English, // Change current language on the end of this file
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;

export function getCurrentLanguage(): string {
  return i18n.language;
}

export type LanguageReturnType = string[];

export function getLanguagesList(): LanguageReturnType[] {
  return [
    ['English', Language.English],
    ['Español', Language.Spanish]
  ];
}

export function changeCurrentLanguage(language: Language): void {
  i18n.changeLanguage(language);
}

export function existsLanguageByCode(code: string): boolean {
  const languages: LanguageReturnType[] = getLanguagesList();
  let exists = false;

  languages.forEach((lang) => {
    if (lang[0].toLowerCase() === code.toLowerCase()) {
      exists = true;
      return;
    }
  });

  return exists;
}
