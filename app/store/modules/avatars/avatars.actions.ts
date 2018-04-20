import { ActionTree, ActionContext } from 'vuex';
import { RootState } from '~/store';
import { State, types } from '~/store/modules/avatars';


export interface Actions<S, R> extends ActionTree<S, R> {
    fetch(context: ActionContext<S, R>): Promise<void>;
}

export const actions: Actions<State, RootState> = {
    async fetch({ commit, rootState }): Promise<void> {
        try {
            let parts = await this.$axios.$get(rootState.settings.apiUrl + '/list');

            commit(types.SET_FACE, parts.face);
        } catch (e) {
            throw new Error('Cannot fetch face parts');
        }
    },
};
