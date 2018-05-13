import { injectable } from 'inversify';

export interface IRandomizerHelper {
    generate(min: number, max: number): number;
    color(): string;
}

@injectable()
export class RandomizerHelper implements IRandomizerHelper {
    public generate(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public color(): string {
        // https://www.paulirish.com/2009/random-hex-color-code-snippets/
        return Math.floor(Math.random() * 16777215).toString(16);
    }
}

export const IRandomizerHelperId = Symbol('IRandomizerHelper');