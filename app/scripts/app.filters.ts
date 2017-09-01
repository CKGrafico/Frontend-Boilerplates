import { Vue } from 'vue-property-decorator';
import { IFilter, DateFilter } from './core/filters';

export class Filters {
    private static readonly filters: Array<IFilter> = [
        new DateFilter()
    ];

    public static install() {
        this.filters.forEach(filter => Vue.filter(filter.name, (...params) => filter.action(...params)));
    }
}