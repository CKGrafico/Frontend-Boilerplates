import { inject, injectable } from 'inversify-hooks';
import { ILogService } from '~/app/shared';
import { IExampleAlertService } from './iexample-alert.service';

@injectable()
export class ExampleAlertService implements IExampleAlertService {
  @inject() private logService: ILogService;

  public get(): void {
    this.logService.get();
    alert('hello');
  }
}
