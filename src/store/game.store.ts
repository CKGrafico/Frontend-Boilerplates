import { Query, Store } from '@datorama/akita';

interface State {
  times: number;
}

const state = (): State => ({
  times: 0
});

const store = new Store<State>(state(), { name: 'game' });

export class GameStoreService {
  private store = store;

  public updateTimes(times: number) {
    this.store.update(state => ({ times: state.times + times }));
  }
}

export class GameStoreQuery extends Query<State> {
  constructor() {
    super(store);
  }

  public times$ = this.select(state => state.times);
}
