import 'reflect-metadata';
import { Container } from 'inversify';
import { injectId } from '~/core/decorators';
import { Store, Config } from '~/store';
import * as s from '~/services';

// Injecting a dependency into a component as property
// @Inject() interviewsService: IInterviewsService;

// Injecting a dependency into a page as asyncData
// @Component
// @AsyncData()
// export default class extends Vue {
//   @Inject() interviewsService: IInterviewsService;

//   public async asyncData({ self }): Promise<{}> {
//     return {
//       interview: await self.interviewsService.get()
//     };
//   }

export function containerBuilder(store: any): Container {
  const container = new Container();

  // Bind Store
  container.bind<Config>('IConfig').toDynamicValue(() => store.state.config);

  // Bind Services
  container.bind<s.IExampleService>(injectId(s.ExampleService)).to(s.ExampleService).inSingletonScope();

  return container;
}
