import { Component, Vue, Prop } from 'vue-property-decorator';
import { Container } from '~/core';
import { ICitiesServiceId, ICitiesService, City, WeatherCodes, WeatherIcons } from '~/shared';
import { IWeatherService, IWeatherServiceId } from '../shared';

@Component
export default class WeatherDetailComponent extends Vue {
    public city: City = null;

    @Container<ICitiesService>(ICitiesServiceId)
    private citiesService: ICitiesService;

    @Container<IWeatherService>(IWeatherServiceId)
    private weatherService: IWeatherService;

    @Prop()
    public id: number;

    public async created() {
        this.city = await this.citiesService.getById(this.id);
        this.city.weather = await this.weatherService.get(this.city);
    }

    // Refactor
    public getWeatherIconClass(code: number): string {
        return WeatherIcons[code] || WeatherIcons[WeatherCodes.NotAvailable];
    }
}
