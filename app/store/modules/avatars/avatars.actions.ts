import { ActionTree } from 'vuex';
import { RootState } from '~/store';
import { State } from '~/store/modules/avatars';


export interface Actions<S, R> extends ActionTree<S, R> {}

export const actions: Actions<State, RootState> = {};
