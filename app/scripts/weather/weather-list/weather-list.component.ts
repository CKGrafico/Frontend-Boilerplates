import { Component, BaseComponent, Tag } from '~/core';
import { container } from '~/app.container';
import { Weather, IWeatherService, IWeatherServiceId } from '../shared';

import Template from './weather-list.component.html?style=weather/weather-list/weather-list.component.css';

@Template
@Component
export default class WeatherListComponent extends BaseComponent {
    private weatherService: IWeatherService;
    public weathers: Weather[] = null;

    public async created() {
        this.weatherService = container.get<IWeatherService>(IWeatherServiceId);
        
        this.weathers = await this.weatherService.get();
    }

    public remove(id: number) {
        this.weatherService.remove(id);
    }
}
