import Vuex, { Store as VuexStore } from 'vuex';
import { State as ConfigState } from './modules/config';

import * as config from './modules/config';
import { containerBuilder } from './app.container';

// Structure of a Store:
// Helpers: Small methods that have logic for this module
// Types: Types that represent the keys of the mutations to commit
// State: The information of our app, we can get or update it.
// Getters: Get complex information from state
// Action: Sync or async operations that commit mutations
// Mutations: Modify the state

type RootState = any; // TODO Improve in the future
export type Store = VuexStore<RootState>;
export type Config = ConfigState;

const createStore = () => {
    const store: Store = new Vuex.Store({
      modules: {
        config
      }
    });

    containerBuilder(store);
    return store;
};


export default createStore;
