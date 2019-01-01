import { shallowMount, createLocalVue } from '@vue/test-utils';
import { expect } from 'chai';

import Logo from './Logo.vue';

describe('Example test', () => {
  let localVue;

    beforeEach(() => {
      localVue = createLocalVue();
    });

    describe('when call to remove', () => {
        it('should call to service method', async () => {
            const wrapper = shallowMount<any>(Logo, {
                localVue
            });

            // expect(wrapper.vm.hello()).to.be.equal(9);
        });
    });
});
