import { ActionTree, MutationTree, GetterTree } from 'vuex';
import { RootState } from '~/store';

// const types = {};

export interface State {}

export class RootStore<State> {
    public state = (): State => ({} as State);

    public getters: GetterTree<State, RootState> = {};

    public actions: ActionTree<State, RootState> = {
        nuxtServerInit: ({ commit }): void => {
            // Fired when app starts
        }
    };

    public mutations: MutationTree<State> = {};
}

