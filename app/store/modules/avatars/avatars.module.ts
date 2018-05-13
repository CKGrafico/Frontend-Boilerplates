import { ActionTree, MutationTree, GetterTree } from 'vuex';
import { RootState } from '~/store';
import { StoreModule } from '~/core';
import { getters } from './avatars.getters';
import { mutations } from './avatars.mutations';
import { State } from './avatars.models';
import { IAvatarsHelperId, IAvatarsHelper } from './avatars.helpers';
import { types } from './avatars.types';
import { inject } from 'inversify';

export * from './avatars.types';
export * from './avatars.models';

export class AvatarsStore extends StoreModule<State> {
    public static id = 'avatars';

    constructor(@inject(IAvatarsHelperId) helpers: IAvatarsHelper) {
        super();
    }

    public state = (): State => ({
        faceParts: null
    })

    public getters: GetterTree<State, RootState> = getters;
    public mutations: MutationTree<State> = mutations;
    public actions: ActionTree<State, RootState> = {
        fetch: async({ commit, rootState }): Promise<void> => {
            try {
                let parts = await this.$axios.$get(rootState.settings.apiUrl + '/list');
                commit(types.SET_FACE, parts.face);
            } catch (e) {
                throw new Error(e);
            }
        },
    };
}