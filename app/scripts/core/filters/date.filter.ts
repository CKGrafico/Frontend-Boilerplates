import { IFilter } from '.';
import { DateService } from '~/shared/date';

export class DateFilter extends DateService implements IFilter {
    public name = 'date';

    action(value: any) {
        return this.formatDate(value);
    }
}
