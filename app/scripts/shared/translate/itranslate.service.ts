import VueI18n from 'vue-i18n';

export interface ITranslateService {
    get(text: string, ...keys: Array<string>): VueI18n.TranslateResult;
}

export const ITranslateServiceId = Symbol('ITranslateService');