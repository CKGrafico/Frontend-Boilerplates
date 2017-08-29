export interface ITextService {
    get(): Promise<any[]>;
}

export const ITextServiceIdentifier = Symbol('ITextServiceIdentifier');