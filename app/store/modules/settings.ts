import { ActionTree, MutationTree, GetterTree, ActionContext } from 'vuex';
import { RootState } from '~/store';

export const name = 'settings';

export const types = {
    SET_SETTINGS: 'SET_SETTINGS'
};

export interface State {
    loaded: boolean;
    apiUrl: string;
}

export const state = (): State => ({
    loaded: false,
    apiUrl: null
});

export const getters: GetterTree<State, RootState> = {};

export interface Actions<S, R> extends ActionTree<S, R> {
    load(context: ActionContext<S, R>): void;
}

export const actions: Actions<State, RootState> = {
    load({ commit }): Promise<void> {
        return new Promise(async (resolve) => {
            // Some ajax call if needed
            //const settings = await this.$axios.$get('/api/config');
            const settings = { apiUrl: 'https://api.adorable.io/avatars' };
            commit(types.SET_SETTINGS, settings);
            resolve();
        });
    }
};

export const mutations: MutationTree<State> = {
    [types.SET_SETTINGS](state, settings: State): void {
        state.loaded = true;
        state.apiUrl = settings.apiUrl;
    }
};

