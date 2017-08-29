import localforage from 'localforage';
import { injectable } from 'inversify';
import { ITextService } from '.';

@injectable()
export class TextService implements ITextService {
    async get(): Promise<any[]> {
        return localforage.getItem('seed-cities') as Promise<any[]>;
    }
}