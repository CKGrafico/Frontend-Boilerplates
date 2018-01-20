import { Component, Vue } from 'vue-property-decorator';
import { Tag, Container } from '~/core';
import { City, ICitiesService, ICitiesServiceId } from '~/shared';

import Template from './city-add.component.html?style=cities/shared/city-add/city-add.component.css';

@Template
@Tag('city-add')
@Component
export class CityAddComponent extends Vue {
    public city: City = null;
    public name = '';

    @Container<ICitiesService>(ICitiesServiceId)
    private citiesService: ICitiesService;

    public async search() {
        if (!this.name) {
            return;
        }
        
        this.city = await this.citiesService.search(this.name);
    }
}
