import { Component, BaseComponent, Tag } from '~/core';
import { container } from '~/app.container';
import { City, ICitiesService, ICitiesServiceId } from '~/shared';

import Template from './city-add.component.html?style=cities/shared/city-add/city-add.component.css';

@Template
@Tag('city-add')
@Component
export class CityAddComponent extends BaseComponent {
    private citiesService: ICitiesService;
    public city: City = null;
    public name = '';

    public created() {
        this.citiesService = container.get<ICitiesService>(ICitiesServiceId);
    }

    public async search() {
        if (!this.name) {
            return;
        }
        
        this.city = await this.citiesService.search(this.name);
    }
}
