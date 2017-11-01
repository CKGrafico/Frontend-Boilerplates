import { TranslateResult } from 'vue-i18n';

export interface ITranslateService {
    get(text: string, ...keys: Array<string>): TranslateResult;
}

export const ITranslateServiceId = Symbol('ITranslateService');