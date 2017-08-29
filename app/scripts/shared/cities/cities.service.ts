import localforage from 'localforage';
import { injectable } from 'inversify';
import { City, ICitiesService } from '.';

@injectable()
export class CitiesService implements ICitiesService {
    async get(): Promise<City[]> {
        return localforage.getItem('seed-cities') as Promise<City[]>;
    }
}