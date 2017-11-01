import { Container } from 'inversify';
import * as s from '~/shared';
import { citiesContainerBuilder } from '~/cities';
import { weatherContainerBuilder } from '~/weather';

// Injecting a service into a service
// @inject(IExampleServiceIdentifier) private exampleService: IExampleService

// Injecting a service into a component (on created)
// this.exampleService = container.get<IExampleService>(IExampleServiceIdentifier);

export let container: Container = null;

export function containerBuilder(): Container {
    container = new Container();

    // Bind shared services
    container.bind<s.IDateService>(s.IDateServiceId).to(s.DateService).inSingletonScope();
    container.bind<s.ITranslateService>(s.ITranslateServiceId).to(s.TranslateService).inSingletonScope();
    container.bind<s.ICitiesService>(s.ICitiesServiceId).to(s.CitiesService).inSingletonScope();

    // Bind services for each module
    citiesContainerBuilder(container);
    weatherContainerBuilder(container);

    return container;
}