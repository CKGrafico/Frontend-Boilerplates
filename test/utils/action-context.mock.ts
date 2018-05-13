import { ActionContext } from 'vuex';
import { RootState } from '~/store';

export let actionContextMockBuilder = <S>(s: S): ActionContext<S, RootState> => ({
    dispatch: (type: string) => Promise.resolve(),
    commit: (type: string) => {},
    state: s,
    getters: {},
    rootState: {} as any,
    rootGetters: {}
});