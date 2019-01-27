import { IExampleService } from './iexample.service';
import { Inject } from '~/core';
import { Config } from '~/store';
import { injectable } from 'inversify';

@injectable()
export class ExampleService implements IExampleService {
    @Inject() config: Config;

    public async get(): Promise<number[]> {
      console.log(this.config);

      const results = await fetch('/api/example');

      if (!results.ok) {
        throw new Error();
      }

      return await results.json();
    }
}
