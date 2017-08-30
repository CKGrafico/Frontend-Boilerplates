import { Weather } from '.';

export interface IWeatherService {
    get(): Promise<Weather[]>;
    getById(id: number): Promise<Weather>;
    search(name: string): Promise<Weather>;
    remove(id: number): Promise<Weather[]>;
}

export const IWeatherServiceId = Symbol('IWeatherService');