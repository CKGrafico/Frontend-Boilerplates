import 'test/unit/karma.vendor';
import * as chai from 'chai';

import { ExampleService } from './example.service';
import { mockInject } from '~/core';
import { Config } from '~/store';
import { fetchStub } from 'test/unit/helpers';


describe('ExampleService', () => {
    let exampleService;

    before(() => {
        chai.should();
    });

    beforeEach(() => {
        exampleService = new ExampleService();
    });

    describe('when get', () => {
        it('should return an array of number', async () => {
            const expectedResult = [1, 2, 3, 4];

            mockInject(exampleService, 'config', {
                settings: {
                    apiUrl: 'mockedApiUrl'
                }
            } as Config);

            const spyFetchCategory = fetchStub(JSON.stringify(expectedResult));

            let exampleData = await exampleService.get();

            chai.expect(exampleData[0]).to.equal(1);
            chai.expect(spyFetchCategory).to.be.called;
            spyFetchCategory.restore();
        });
    });
});
