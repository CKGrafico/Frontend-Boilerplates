import { GetterTree, ActionContext, ActionTree, MutationTree } from 'vuex';
import { RootState } from '~/store';

export const types = {
    SET_APP_NAME: 'SET_APP_NAME'
};

export interface State {}

export const state = (): State => ({});

export const helpers = {};

export const getters: GetterTree<State, RootState> = {};

export interface Actions<S, R> extends ActionTree<S, R> {
    nuxtServerInit(context: ActionContext<S, R>): void;
}

export const actions: Actions<State, RootState> = {
    nuxtServerInit({ commit }): void {
        // Fired when app starts
    }
};

export const mutations: MutationTree<State> = {};


