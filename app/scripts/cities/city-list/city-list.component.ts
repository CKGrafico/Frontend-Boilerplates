import { Component, BaseComponent } from '~/core';
import { container } from '~/app.container';
import { City, ICitiesService, ICitiesServiceId } from '~/shared';
import { CityAddComponent } from '../shared';

import Template from './city-list.component.html?style=cities/city-list/city-list.component.css';

@Template
@Component({
    components: {
        [CityAddComponent.tag]: CityAddComponent
    }
})
export default class CityListComponent extends BaseComponent {
    private citiesService: ICitiesService;
    public cities: City[] = null;

    public async created() {
        this.citiesService = container.get<ICitiesService>(ICitiesServiceId);
        
        this.cities = await this.citiesService.get();
    }

    public remove(id: number) {
        this.citiesService.remove(id);
    }
}
