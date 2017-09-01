import { Component, BaseComponent, Prop } from '~/core';
import { container } from '~/app.container';
import { City, ICitiesService, ICitiesServiceId } from '~/shared';

import Template from './city-detail.component.html?style=cities/city-detail/city-detail.component.css';

@Template
@Component
export default class CityDetailComponent extends BaseComponent {
    private citiesService: ICitiesService;
    public city: City = null;

    @Prop()
    public id: number;

    get mapUrl() {
        return `https://www.bing.com/maps/embed?h=400&w=400&cp=${this.city.centroid[0]}~${this.city.centroid[1]}&lvl=12&typ=s&sty=r&src=SHELL&FORM=MBEDV8`;
    }

    public async created() {
        this.citiesService = container.get<ICitiesService>(ICitiesServiceId);

        this.city = await this.citiesService.getById(this.id);
    }
}
