import { Component, Vue } from 'vue-property-decorator';

import { Inject } from '~/core';
import { ICitiesService, City, WeatherCodes, WeatherIcons } from '~/shared';
import { IWeatherService } from '~/weather/shared';

@Component
export default class WeatherListComponent extends Vue {
    public cities: City[] = [];

    @Inject() citiesService: ICitiesService;
    @Inject() weatherService: IWeatherService;

    public async created(): Promise<void> {
        this.cities = await this.citiesService.get();
        this.cities.forEach(async city => {
            city.weather = await this.weatherService.get(city);
        });
    }

    public goToCity(id: string): void {
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
