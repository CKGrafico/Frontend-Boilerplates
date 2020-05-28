import { inject } from 'inversify-props';
import { Vue } from 'vue-property-decorator';
import { IFilter } from '~/core';
import * as s from '~/shared';

export class Filters {
  @inject() dateService: s.IDateService;
  @inject() translateService: s.ITranslateService;

  public install(): void {
    const filters: any[] = [this.dateService, this.translateService];

    filters.forEach((filterService: IFilter) =>
      Vue.filter(filterService.filterName, (...params) => filterService.filterAction(...params))
    );
  }
}
