import { mount, createLocalVue } from 'vue-test-utils'
import { expect } from 'chai';
import { nextTick } from 'test/unit/helpers/nextTick';

import { CityAddComponent } from '.';

describe('CityAddComponent', () => {
  let localVue

    beforeEach(() => {
      localVue = createLocalVue();
    });

    describe('when call to testablemethod', () => {
        it('should should return the number plus one', async () => {
            const wrapper = mount(CityAddComponent, {
                localVue
            });

            await nextTick();

            expect(wrapper.vm.testableMethods(2)).to.equal(3);
        });
    });
});