import { GetterTree, ActionContext, ActionTree, MutationTree } from 'vuex';
import { RootState } from 'store';

export const types = {
    SET_APP_NAME: 'SET_APP_NAME'
};

export interface State {
    name: string;
}

export const state = (): State => ({
    name: 'Default App'
});

export const helpers = {};

export const getters: GetterTree<State, RootState> = {
    todayName(state: State): string {
        return state.name + Date.now();
    }
};

export interface Actions<S, R> extends ActionTree<S, R> {
    nuxtServerInit(context: ActionContext<S, R>): void;
    changeName(context: ActionContext<S, R>, name: string): void;
}

export const actions: Actions<State, RootState> = {
    nuxtServerInit({ commit }): void {
        // Fired when app starts
    },

    changeName({ commit }, name: string): void {
        commit(types.SET_APP_NAME, name);
    }
};

export const mutations: MutationTree<State> = {
    [types.SET_APP_NAME](state, name: string): void {
        state.name = name;
    }
};


