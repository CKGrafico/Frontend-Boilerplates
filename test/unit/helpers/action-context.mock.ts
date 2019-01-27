import { ActionContext } from 'vuex';

export let actionContextMockBuilder = <S>(s: S): ActionContext<S, any> => ({
    dispatch: (type: string) => Promise.resolve(),
    commit: (type: string) => {},
    state: s,
    getters: {},
    rootState: {} as any,
    rootGetters: {}
});
