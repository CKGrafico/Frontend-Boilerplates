import { Component, BaseComponent, Tag, Prop } from '~/core';
import { container } from '~/app.container';
import { Weather, IWeatherService, IWeatherServiceId } from '../shared';

import Template from './weather-detail.component.html?style=weather/weather-detail/weather-detail.component.css';

@Template
@Component
export default class WeatherDetailComponent extends BaseComponent {
    private citiesService: IWeatherService;
    public weather: Weather = null;

    @Prop()
    public id: number; 

    public async created() {
        this.citiesService = container.get<IWeatherService>(IWeatherServiceId);

        this.weather = await this.citiesService.getById(this.id);
    }
}
