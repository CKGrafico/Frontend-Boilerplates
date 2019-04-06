import 'test/unit/karma.vendor';
import { expect } from 'chai';
import { fetchStub } from 'test/unit/helpers';

import { CitiesService } from './cities.service';

// Testing fetch

describe('CitiesService', () => {
    let citiesService;

    beforeEach(() => {
        citiesService = new CitiesService();
    });

    describe('when format Date', () => {
        it('should return date in correct format', async () => {
            const name = 'Barcelona';
            const route = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20geo.places(1)%20where%20text%3D%22${name}%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`
            const spyFetchCitiesSearch = fetchStub(JSON.stringify({
                query: {
                  results: {
                    place: {
                      locality1: {
                        type: 'Town',
                        woeid: '753692',
                        content: name
                      },
                      centroid: {
                        latitude: '41.39917',
                        longitude: '2.15397'
                      }
                    }
                  }
                }
              }));
            
            citiesService.cities = []
            let city = await citiesService.search(name);

            expect(city.title).to.equal(name);
            expect(spyFetchCitiesSearch.withArgs(route)).to.be.called;
            spyFetchCitiesSearch.restore();
        });
    });
});