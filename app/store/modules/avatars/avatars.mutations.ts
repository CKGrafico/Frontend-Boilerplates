import { MutationTree } from 'vuex';
import { State, AvatarsFace, types } from '~/store/modules/avatars';

export const mutations: MutationTree<State> = {
    [types.SET_FACE](state, face: AvatarsFace) {
        state.faceParts = face;
    }
};