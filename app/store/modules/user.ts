import { ActionTree, MutationTree, GetterTree, ActionContext } from 'vuex';
import { RootState } from '~/store';

export const name = 'user';

export const types = {
    SET_AVATAR: 'SET_AVATAR'
};

export interface State {
    avatar: any;
}

export const state = (): State => ({
    avatar: null
});

export const getters: GetterTree<State, RootState> = {};

export const helpers = {};

export interface Actions<S, R> extends ActionTree<S, R> {
    // fetch(context: ActionContext<S, R>): Promise<void>;
}

export const actions: Actions<State, RootState> = {
    // async fetch({ commit, rootState, rootGetters }): Promise<void> {}
};

export const mutations: MutationTree<State> = {
    // [types.SET_AVATAR](state, list: any[]): void {
    //     state.list = list;
    // }
};

