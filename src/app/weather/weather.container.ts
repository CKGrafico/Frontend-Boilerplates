import { Container } from 'inversify';
import { injectId } from '~/core';
import { IWeatherService, WeatherService } from './shared';

export default (container: Container) => {
    container.bind<IWeatherService>(injectId(WeatherService)).to(WeatherService).inSingletonScope();
};