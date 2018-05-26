import { Component, Vue } from 'vue-property-decorator';
import { Container } from '~/core';
import { ICitiesServiceId, ICitiesService, City, WeatherCodes, WeatherIcons } from '~/shared';
import { IWeatherService, IWeatherServiceId } from '~/weather/shared';

@Component
export default class WeatherListComponent extends Vue {
    public cities: City[] = [];

    @Container<ICitiesService>(ICitiesServiceId)
    private citiesService: ICitiesService;

    @Container<IWeatherService>(IWeatherServiceId)
    private weatherService: IWeatherService;

    public async created() {
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
