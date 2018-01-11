import { Component, Vue, Prop } from 'vue-property-decorator';
import { container } from '~/app.container';
import { ICitiesServiceId, ICitiesService, City, WeatherCodes, WeatherIcons } from '~/shared';
import { IWeatherService, IWeatherServiceId } from '../shared';

import Template from './weather-detail.component.html?style=weather/weather-detail/weather-detail.component.css';

@Template
@Component
export default class WeatherDetailComponent extends Vue {
    private citiesService: any;
    private weatherService: IWeatherService;
    public city: City = null;

    @Prop()
    public id: number;

    public async created() {
        this.weatherService = container.get<IWeatherService>(IWeatherServiceId);
        this.citiesService = container.get<ICitiesService>(ICitiesServiceId);

        this.city = await this.citiesService.getById(this.id);
        this.city.weather = await this.weatherService.get(this.city);
    }

    // Refactor
    public getWeatherIconClass(code: number): string {
        return WeatherIcons[code] || WeatherIcons[WeatherCodes.NotAvailable];
    }
}
