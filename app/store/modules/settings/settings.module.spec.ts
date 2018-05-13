import { ActionContext } from 'vuex';

import { expect, spy } from '~/test/libs/chai';
import { axiosMock } from '~/test/libs/axios';
import { actionContextMockBuilder, nuxtAxiosMockBuilder } from '~/test/utils';
import { RootState } from '~/store';
import { settingsModule } from '~/store/modules';

let store: settingsModule.SettingsStore;
let state: settingsModule.State;
let actionContext: ActionContext<settingsModule.State, RootState>;

describe('Store Settings', () => {
    beforeEach(() => {
        store = new settingsModule.SettingsStore();
        store = nuxtAxiosMockBuilder(store);
        state = store.state();
        actionContext = actionContextMockBuilder<settingsModule.State>(state);
        spy(actionContext, 'commit');
    });

    describe('when the store is created', () => {
        it('should have loaded to false', () => {
            expect(state.loaded).to.equal(false);
        });
    });

    describe('when load', () => {
        it('should update state with settings', async () => {
            const status = 200;
            axiosMock.onGet(`/api/config`).reply(status, {});

            // TODO: Improve this
            await (store.actions as any).load(actionContext);
            expect(actionContext.commit).to.have.been.calledWith(settingsModule.types.SET_SETTINGS);
        });
    });
});