import { Container } from 'inversify';
import * as s from '~/shared';
import { citiesModule } from '~/cities';
import { weatherModule } from '~/weather';
import { injectId } from '~/core';

// How to inject a dependency
// @Inject() nameService: INameService;

export let container: Container = null;

export function containerBuilder(): Container {
    container = new Container();

    // Bind shared services
    container.bind<s.IDateService>(injectId(s.DateService)).to(s.DateService).inSingletonScope();
    container.bind<s.ITranslateService>(injectId(s.TranslateService)).to(s.TranslateService).inSingletonScope();
    container.bind<s.ICitiesService>(injectId(s.CitiesService)).to(s.CitiesService).inSingletonScope();

    // Bind services for each module
    citiesModule.container(container);
    weatherModule.container(container);

    return container;
}