import localforage from 'localforage';
import { injectable } from 'inversify';
import { Weather, IWeatherService } from '.';

@injectable()
export class WeatherService implements IWeatherService {
    private weathers: Weather[];

    public async get(): Promise<Weather[]> {
        if (this.weathers) {
            return Promise.resolve(this.weathers);
        }

        this.weathers = await localforage.getItem('seed-weathers') as Weather[];

        return Promise.resolve(this.weathers);
    }

    public async getById(id: number): Promise<Weather> {
        return this.weathers.find(weather => weather.woeid === id);
    }

    public async search(name: string): Promise<Weather> {
        let response = await fetch(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20geo.places(1)%20where%20text%3D%22${name}%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`);
        let result = await response.json();
        let place = result.query.results.place;
        let locality = place.locality1;

        if (!locality) {
            return;
        }

        let weather: Weather = {
            title: locality.content,
            location_type: locality.type,
            woeid: parseInt(locality.woeid, 10),
            centroid: [parseFloat(place.centroid.latitude), parseFloat(place.centroid.longitude)]
        };

        if (!this.weathers.find(x => x.title.toLowerCase() === weather.title.toLowerCase())) {
            this.weathers.push(weather);
            await localforage.setItem('seed-weathers', this.weathers);
        }

        return weather;
    }

    public async remove(id: number): Promise<Weather[]> {
        let index = this.weathers.findIndex(weather => weather.woeid === id);
        this.weathers.splice(index, 1);
        return localforage.setItem('seed-weathers', this.weathers);
    }
}