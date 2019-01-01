import { Example } from './example';

export interface IExampleService {
  get(): Promise<Example[]>;
}
