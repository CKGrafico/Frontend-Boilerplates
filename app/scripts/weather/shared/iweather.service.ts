import { City, Weather } from '~/shared';

export interface IWeatherService {
    getToday(city: City): Promise<Weather>;
}

export const IWeatherServiceId = Symbol('IWeatherService');