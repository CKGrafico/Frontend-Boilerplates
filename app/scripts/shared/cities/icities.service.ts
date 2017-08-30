import { City } from '.';

export interface ICitiesService {
    get(): Promise<City[]>;
}

export const ICitiesServiceId = Symbol('ICitiesService');