import { Component, Vue } from 'vue-property-decorator';

import { container } from '../../app.container';
import { ICitiesService, ICitiesServiceId } from '../../shared';
import { City } from '../../shared';

import Template from './city-list.component.html?style=cities/city-list/city-list.component.css';

@Template
@Component
export default class CityListComponent extends Vue {
    private citiesService: ICitiesService;
    public cities: City[] = null;

    public async created() {
        this.citiesService = container.get<ICitiesService>(ICitiesServiceId);
        
        [this.cities] = [await this.citiesService.get()];
    }
}
