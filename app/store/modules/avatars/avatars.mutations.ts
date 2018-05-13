import { MutationTree } from 'vuex';
import { types } from './avatars.types';
import { State, AvatarsFace } from './avatars.models';

export const mutations: MutationTree<State> = {
    [types.SET_FACE](state: State, face: AvatarsFace) {
        state.faceParts = face;
    }
};
