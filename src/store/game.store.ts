import { Query, Store } from '@datorama/akita';

interface State {
  position: {
    x: number;
    y: number;
  };
}

const state = (): State => ({
  position: { x: 0, y: 0 }
});

const store = new Store<State>(state(), { name: 'game' });

export class GameStoreService {
  private store = store;

  public updatePosition(x: number, y: number) {
    this.store.update(state => ({ position: { x, y } }));
  }
}

export class GameStoreQuery extends Query<State> {
  constructor() {
    super(store);
  }

  public position$ = this.select(state => state.position);
}
