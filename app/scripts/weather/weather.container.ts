import { Container } from 'inversify';
import { IWeatherService, IWeatherServiceId, WeatherService } from './shared';

export let weatherContainerBuilder = (container: Container) => {

    // Bind services
    container.bind<IWeatherService>(IWeatherServiceId).to(WeatherService).inSingletonScope();
};