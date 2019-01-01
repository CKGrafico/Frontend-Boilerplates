import 'reflect-metadata';
import { Container } from 'inversify';
import { injectId } from '~/core';
import { ExampleService, IExampleService } from '~/services/example';
import { Store, Config } from '.';

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

export let container: Container = null;

export function containerBuilder(store: Store): Container {
    container = new Container();

    // Bind Store
    container.bind<Store>('IStore').toConstantValue(store);
    container.bind<Config>('IConfig').toDynamicValue(() => store.state.config);

    // Bind Services
    container.bind<IExampleService>(injectId(ExampleService)).to(ExampleService).inSingletonScope();

    return container;
}
