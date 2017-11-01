import { injectable } from 'inversify';
import { IDateService } from '.';
import { IFilter } from '~/core';

@injectable()
export class DateService implements IDateService, IFilter {
    public filterName = 'date';

    public filterAction(day: string, month: string, year: string) {
        return this.formatDate(day, month, year);
    }

    public formatDate(day: string, month: string, year: string): string {
        if (!day || !month || !year) {
            return '';
        }

        return `${day}/${month}/${year}`;
    }
}