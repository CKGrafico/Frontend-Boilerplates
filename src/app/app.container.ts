import { container } from 'inversify-hooks';
import { GameStoreQuery, GameStoreService } from '~/store';
import { ISprite } from './core';
import { DudeInverseSprite, DudeSprite, ExampleScene } from './game';

// How to inject a dependency

// In a Service: @inject() logService: ILogService;
// In a Hook or component: const [nameService] = useInject<INameService>(cid.INameService)

export function containerBuilder(): void {
  container.addSingleton(GameStoreQuery);
  container.addSingleton(GameStoreService);
  container.addSingleton<ISprite>(DudeSprite);
  container.addSingleton<ISprite>(DudeInverseSprite);
  container.addSingleton(ExampleScene);
}
