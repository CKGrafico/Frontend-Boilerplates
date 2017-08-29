import localforage from 'localforage';
import { City } from '.';

class CitiesService {
    async get(): Promise<City[]> {
        return localforage.getItem('seed-cities') as Promise<City[]>;
    }
}

export let citiesService = new CitiesService();