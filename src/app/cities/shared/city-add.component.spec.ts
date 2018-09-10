import 'test/unit/karma.vendor';
import { shallowMount, createLocalVue } from '@vue/test-utils'
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
            const wrapper = shallowMount<any>(CityAddComponent, {
                localVue
            });

            await nextTick();

            expect(wrapper.vm.testableMethods(2)).to.equal(3);
        });
    });
});