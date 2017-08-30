export interface ITextService {
    get(): Promise<any[]>;
}

export const ITextServiceId = Symbol('ITextService');