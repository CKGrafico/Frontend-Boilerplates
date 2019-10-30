import { injectable } from 'inversify-hooks';
import { ILogService } from './ilog.service';

@injectable()
export class LogService implements ILogService {
  public get(): void {
    console.log('hello');
  }
}
