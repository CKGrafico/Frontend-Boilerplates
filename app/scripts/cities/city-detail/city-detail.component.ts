import { Component, BaseComponent, Prop, Tag } from '~/core';
import { container } from '~/app.container';
import { City, ICitiesService, ICitiesServiceId } from '~/shared';

import Template from './city-detail.component.html?style=cities/city-detail/city-detail.component.css';

@Template
@Tag('city-detail')
@Component
export class CityDetailComponent extends BaseComponent {
    private citiesService: ICitiesService;
    public city: City = null;

    @Prop()
    public id: number; 

    public async created() {
        this.citiesService = container.get<ICitiesService>(ICitiesServiceId);

        this.city = await this.citiesService.getById(this.id);
    }
}
