import { ActionTree } from 'vuex';
import { State } from '~/store/modules/complex';
import { RootState } from 'store';


export interface Actions<S, R> extends ActionTree<S, R> {

}

export const actions: Actions<State, RootState> = {

};
