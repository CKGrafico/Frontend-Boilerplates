import { Component, BaseComponent, Tag } from '~/core';
import { container } from '~/app.container';
import { City, ICitiesService, ICitiesServiceId } from '~/shared';

import Template from './city-add.component.html?style=cities/shared/city-add/city-add.component.css';

@Template
@Tag('city-add')
@Component
export default class CityAddComponent extends BaseComponent {
    private citiesService: ICitiesService;
    public cities: City[] = null;
    
    public async created() {
        this.citiesService = container.get<ICitiesService>(ICitiesServiceId);
    }
}
