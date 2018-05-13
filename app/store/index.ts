import Vuex from 'vuex';
import { containerBuilder } from '~/store/store.container';
import { IStoreModule, modulesBuilder, IStoreModuleId } from '~/core';
import { rootModule, ModulesStates } from '~/store/modules';

// Create IOC container
const container = containerBuilder();
const modules = modulesBuilder(container.getAll<IStoreModule>(IStoreModuleId));

// Structure of a Store:
// Helpers: Small methods that have logic for this module
// Types: Types that represent the keys of the mutations to commit
// State: The information of our app, we can get or update it.
// Getters: Get complex information from state
// Action: Sync or async operations that commit mutations
// Mutations: Modify the state

export type RootState = rootModule.State & ModulesStates;

const createStore = () => {
    return new Vuex.Store({
        ...new rootModule.RootStore(),
        modules
    });
};

export default createStore;
