import { Vue } from 'vue-property-decorator';

import * as s from '~/shared';
import { IFilter, Inject } from '~/core';

export class Filters {
    @Inject() dateService: s.IDateService;
    @Inject() translateService: s.ITranslateService;

    public install(): void {
        let filters: any[] = [
            this.dateService,
            this.translateService,
        ];
        
        filters.forEach((filterService: IFilter) => Vue.filter(filterService.filterName, (...params) => filterService.filterAction(...params)));
    }
}