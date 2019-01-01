import { Example } from './example';
import { IExampleService } from './iexample.service';
import { Inject } from '~/core';
import { Config } from '~/store';
import { injectable } from 'inversify';

@injectable()
export class ExampleService implements IExampleService {
    @Inject() config: Config;

    public async get(): Promise<Example[]> {

      const results = await fetch(this.config.settings.apiUrl + '/example');

      if (!results.ok) {
        throw new Error();
      }

      return await results.json();
    }
}
