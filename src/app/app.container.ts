import { Container } from 'inversify';
import * as s from '~/shared';
import { citiesModule } from '~/cities';
import { weatherModule } from '~/weather';

// How to inject a dependency
// @Inject() nameService: INameService;

export let container: Container = null;

export function containerBuilder(): Container {
    container = new Container();

    // Bind shared services
    container.bind<s.IDateService>(s.IDateServiceId).to(s.DateService).inSingletonScope();
    container.bind<s.ITranslateService>(s.ITranslateServiceId).to(s.TranslateService).inSingletonScope();
    container.bind<s.ICitiesService>(s.ICitiesServiceId).to(s.CitiesService).inSingletonScope();

    // Bind services for each module
    citiesModule.container(container);
    weatherModule.container(container);

    return container;
}