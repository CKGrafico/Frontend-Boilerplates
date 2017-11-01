import { Vue } from 'vue-property-decorator';
import { IFilter } from '~/core';
import { container } from '~/app.container';
import * as s from '~/shared';

export class Filters {
    public static install() {
        let filters: any[] = [
            container.get<s.IDateService>(s.IDateServiceId),
            container.get<s.ITranslateService>(s.ITranslateServiceId),
        ];
        
        filters.forEach((filterService: IFilter) => Vue.filter(filterService.filterName, (...params) => filterService.filterAction(...params)));
    }
}