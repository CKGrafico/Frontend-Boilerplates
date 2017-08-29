import { City } from '.';

export interface ICitiesService {
    get(): Promise<City[]>;
}

export const ICitiesServiceIdentifier = Symbol('ICitiesService');