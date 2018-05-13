import { ActionTree, MutationTree, GetterTree } from 'vuex';
import { injectable } from 'inversify';
import { RootState } from '~/store';
import { StoreModule } from '~/core';

export const types = {
    SET_SETTINGS: 'SET_SETTINGS'
};

export interface State {
    loaded: boolean;
    apiUrl: string;
}

@injectable()
export class SettingsStore extends StoreModule<State> {
    public static id = 'settings';

    public state = (): State => ({
        loaded: false,
        apiUrl: null
    })

    public getters: GetterTree<State, RootState> = {};
    public actions: ActionTree<State, RootState> = {
        load: ({ commit }): Promise<void> => {
            return new Promise(async (resolve) => {
                // Some ajax call if needed
                //const settings = await this.$axios.$get('/api/config');
                const settings = { apiUrl: 'https://api.adorable.io/avatars' };
                commit(types.SET_SETTINGS, settings);
                resolve();
            });
        }
    };

    public mutations: MutationTree<State> = {
        [types.SET_SETTINGS](state, settings: State): void {
            state.loaded = true;
            state.apiUrl = settings.apiUrl;
        }
    };
}