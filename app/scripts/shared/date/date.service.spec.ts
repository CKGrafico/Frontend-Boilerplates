import { expect } from 'chai';

import { DateService } from './date.service';

let dateService;

describe('DateService', () => {

    beforeEach(() => {
        dateService = new DateService();
    });

    describe('when format Date', () => {
        it('should return date in correct format', () => {
            let date = dateService.formatDate(new Date(2018, 0, 1));
            expect(date).to.equal('01/01/2018');
        });

        it('should return empty string if some of parameters is false', () => {
            let date = dateService.formatDate(null);
            expect(date).to.equal('');
        });
    });
});