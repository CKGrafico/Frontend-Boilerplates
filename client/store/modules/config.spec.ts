import 'test/unit/karma.vendor';
import * as chai from 'chai';

import { fetchStub, actionContextMockBuilder } from 'test/unit/helpers';

import { ActionContext } from 'vuex';
import { spy } from 'sinon';
import * as configStore from './config';


describe('Config Store', () => {
  let store: typeof configStore;
  let state: configStore.State;
  let actionContext: ActionContext<configStore.State, any>;

  before(() => {
    chai.should();
  });

  beforeEach(() => {
    store = configStore;
    state = store.state();
    actionContext = actionContextMockBuilder<configStore.State>(state);
    spy(actionContext, 'commit');
  });

  describe('when load is called', () => {
    it('should not update settings if were loaded', async () => {
      const spyFetchWishlist = fetchStub({setting1: 'a', setting2: 'b'});

      state.settings = {setting1: 'a', setting2: 'b'};

      await (store.actions as any).load(actionContext);

      chai.expect(actionContext.commit).to.not.have.been.calledWith(configStore.Type.SET_SETTINGS);

      chai.expect(spyFetchWishlist).to.not.be.called;
      spyFetchWishlist.restore();
    });
  });
});
