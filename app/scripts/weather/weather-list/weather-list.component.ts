import { Component, BaseComponent } from '~/core';
import { container } from '~/app.container';
import { ICitiesServiceId, ICitiesService, City, Weather, WeatherAstronomy, WeatherCodes, WeatherIcons } from '~/shared';
import { IWeatherService, IWeatherServiceId } from '../shared';

import Template from './weather-list.component.html?style=weather/weather-list/weather-list.component.css';

@Template
@Component
export default class WeatherListComponent extends BaseComponent {
    private citiesService: any;
    private weatherService: IWeatherService;
    public cities: City[] = null;

    public async created() {
        this.weatherService = container.get<IWeatherService>(IWeatherServiceId);
        this.citiesService = container.get<ICitiesService>(ICitiesServiceId);
        
        this.cities = await this.citiesService.get();
        this.cities.forEach(async city => {
            city.weather = await this.weatherService.get(city);
        });
    }

    public goToCity(id: string) {
        this.$router.push({
            name: 'weather-detail',
            params: {
                id: id
            }
        });
    }

    // Refactor
    public getWeatherIconClass(code: number): string {
        return WeatherIcons[code] || WeatherIcons[WeatherCodes.NotAvailable];
    }
}
