import { Component, Vue, Prop } from 'vue-property-decorator';

import { Inject } from '~/core';
import { ICitiesService, City, WeatherCodes, WeatherIcons } from '~/shared';
import { IWeatherService } from '../shared';

@Component
export default class WeatherDetailComponent extends Vue {
    public city: City = null;

    @Inject() citiesService: ICitiesService;
    @Inject() weatherService: IWeatherService;

    @Prop() id: number;

    public async created(): Promise<void> {
        this.city = await this.citiesService.getById(this.id);
        this.city.weather = await this.weatherService.get(this.city);
    }

    // Refactor
    public getWeatherIconClass(code: number): string {
        return WeatherIcons[code] || WeatherIcons[WeatherCodes.NotAvailable];
    }
}
