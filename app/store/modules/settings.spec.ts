import { ActionContext } from 'vuex';

import { expect, spy } from '~/test/libs/chai';
import { axiosMock } from '~/test/libs/axios';
import { actionContextMockBuilder, nuxtAxiosMockBuilder } from '~/test/utils';
import { RootState } from '~/store';

import * as settings from './settings';

let state: settings.State;
let actionContext: ActionContext<settings.State, RootState>;
let actions: settings.Actions<settings.State, RootState>;

describe('Store Settings', () => {
    beforeEach(() => {
        state = settings.state();
        actionContext = actionContextMockBuilder<settings.State>(state);
        spy(actionContext, 'commit');
        actions = nuxtAxiosMockBuilder(settings.actions);
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

            await actions.load(actionContext);
            expect(actionContext.commit).to.have.been.calledWith(settings.types.SET_SETTINGS);
        });
    });
});