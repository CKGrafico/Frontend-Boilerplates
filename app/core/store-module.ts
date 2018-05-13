import { GetterTree, ActionTree, MutationTree, Module } from 'vuex';
import { injectable } from 'inversify';
import { RootState } from '~/store';
import { StorePluginsTypes } from '~/typings/store-plugins';

export interface IStoreModule {
    namespaced: boolean;
}

@injectable()
export abstract class StoreModule<State> extends StorePluginsTypes implements Module<State, RootState>, IStoreModule {
    public namespaced = true;
    public abstract state: State | (() => State);
    public abstract getters: GetterTree<State, RootState>;
    public abstract actions: ActionTree<State, RootState>;
    public abstract mutations: MutationTree<State>;
}

export const modulesBuilder = (arr) => {
    return Object.assign({}, ...arr.map(item => {
        if (!item.constructor.id) {
            throw new Error(`${item.constructor.name} has no static property called 'id'`);
        }

        return ({[item.constructor.id]: item});
    }));
};

export const IStoreModuleId = Symbol('IStoreModule');