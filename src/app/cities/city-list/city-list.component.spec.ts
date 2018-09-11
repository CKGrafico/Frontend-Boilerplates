import 'test/unit/karma.vendor';
import { shallowMount, createLocalVue } from '@vue/test-utils'
import sinon from 'sinon'
import { expect } from 'chai';

import { mockInject } from '~/core';
import { nextTick } from 'test/unit/helpers';
import { default as CityListComponent } from './city-list.component.vue';

// Simple Stub test

describe('CityListComponent', () => {
  let localVue

    beforeEach(() => {
      localVue = createLocalVue();
    });

    describe('when call to remove', () => {
        it('should call to service method', async () => {
            const wrapper = shallowMount<any>(CityListComponent, {
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