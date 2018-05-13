import { ActionTree, MutationTree, GetterTree } from 'vuex';
import { injectable } from 'inversify';
import { RootState } from '~/store';
import { StoreModule } from '~/core';

export const types = {
    SET_AVATAR: 'SET_AVATAR'
};

export interface State {
    avatar: any;
}

@injectable()
export class UsersStore extends StoreModule<State> {
    public static id = 'user';

    public state = (): State => ({
        avatar: null
    })

    public getters: GetterTree<State, RootState> = {};
    public actions: ActionTree<State, RootState> = {
        // fetch: ({ commit, rootState, rootGetters }): Promise<void> => {}
    };

    public mutations: MutationTree<State> = {
        // [types.SET_AVATAR](state, list: any[]): void {
        //     state.list = list;
        // }
    };
}