import { City } from '.';

export interface ICitiesService {
    get(): Promise<City[]>;
    search(name: string): Promise<City>;
    remove(id: number): Promise<City[]>;
}

export const ICitiesServiceId = Symbol('ICitiesService');