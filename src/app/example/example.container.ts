import { container } from 'inversify-props';
import { ExampleAlertService, IExampleAlertService } from './shared';

export default () => {
  container.addSingleton<IExampleAlertService>(ExampleAlertService);
};
