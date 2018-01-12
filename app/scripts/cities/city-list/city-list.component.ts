import { Component, Vue } from 'vue-property-decorator';

import { Tag, Container } from '~/core';
import { City, ICitiesService, ICitiesServiceId, } from '~/shared';
import { CityAddComponent } from '~/cities/shared';

import Template from './city-list.component.html?style=cities/city-list/city-list.component.css';

@Template
@Component({
    components: {
        [Tag(CityAddComponent)]: CityAddComponent
    }
})
export default class CityListComponent extends Vue {
    public cities: City[] = null;
    public a = 1;

    @Container<ICitiesService>(ICitiesServiceId)
    private citiesService: ICitiesService;

    public async created() {
        this.cities = await this.citiesService.get();
    }

    public remove(id: number) {
        this.citiesService.remove(id);
    }
}
