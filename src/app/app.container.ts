import { container } from 'inversify-props';
import { citiesModule } from '~/cities';
import * as s from '~/shared';
import { weatherModule } from '~/weather';

// How to inject a dependency
// @inject() nameService: INameService;

export function containerBuilder(): void {
  // Bind shared services
  container.addSingleton<s.IDateService>(s.DateService);
  container.addSingleton<s.ITranslateService>(s.TranslateService);
  container.addSingleton<s.ICitiesService>(s.CitiesService);

  // Bind services for each module
  citiesModule.container();
  weatherModule.container();
}
