import localforage from 'localforage';
import { injectable } from 'inversify';
import { City, ICitiesService } from '.';

@injectable()
export class CitiesService implements ICitiesService {
    private cities: City[];

    public async get(): Promise<City[]> {
        if (this.cities) {
            return Promise.resolve(this.cities);
        }

        this.cities = await localforage.getItem('seed-cities') as City[];

        return Promise.resolve(this.cities);
    }

    public async getById(id: number): Promise<City> {
        return this.cities.find(city => city.woeid === id);
    }

    public async search(name: string): Promise<City> {
        let results = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London&appid=304b2a9742b144800ab911d8a1574411');
        let city = {
            title: name,
            location_type: 'City',
            woeid: Date.now(),
            latt_long: '0,0'
        };

        // Refactor (:
        if (!this.cities.find(x => x.title.toLowerCase() === city.title.toLowerCase())) {
            this.cities.push(city);
            await localforage.setItem('seed-cities', this.cities);
        }

        return city;
    }

    public async remove(id: number): Promise<City[]> {
        let index = this.cities.findIndex(city => city.woeid === id);
        this.cities.splice(index, 1);
        return localforage.setItem('seed-cities', this.cities);
    }
}