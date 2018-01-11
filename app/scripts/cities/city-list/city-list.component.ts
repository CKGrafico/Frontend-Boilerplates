import { Component, Vue } from 'vue-property-decorator';

import { Tag } from '~/core';
import { container } from '~/app.container';
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
