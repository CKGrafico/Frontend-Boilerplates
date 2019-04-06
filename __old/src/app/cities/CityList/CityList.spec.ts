import 'test/unit/karma.vendor';
import { shallowMount, createLocalVue } from '@vue/test-utils'
import sinon from 'sinon'
import { expect } from 'chai';

import { mockInject } from '~/core';
import { nextTick } from 'test/unit/helpers';
import CityList from './CityList.vue';

// Simple Stub test

describe('CityList', () => {
  let localVue

    beforeEach(() => {
      localVue = createLocalVue();
    });

    describe('when call to remove', () => {
        it('should call to service method', async () => {
            const wrapper = shallowMount<any>(CityList, {
                localVue
            });

            const spyCitiesServiceRemove = sinon.stub()
            mockInject(wrapper.vm, 'citiesService', {
                remove: spyCitiesServiceRemove
            })
        
            await nextTick()
            wrapper.vm.remove();
        
            expect(spyCitiesServiceRemove).to.be.called;
            spyCitiesServiceRemove.restore();
        });
    });
});