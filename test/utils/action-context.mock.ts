import { ActionContext } from 'vuex';
import { RootState, modules, state } from '~/store';

const modulesStates = {
    settings: modules.settings.state(),
    user: modules.user.state(),
    avatars: modules.avatars.state()
};

export let actionContextMockBuilder = <S>(s: S): ActionContext<S, RootState> => ({
    dispatch: (type: string) => Promise.resolve(),
    commit: (type: string) => {},
    state: s,
    getters: {},
    rootState: {...modulesStates, ...state()},
    rootGetters: {}
});