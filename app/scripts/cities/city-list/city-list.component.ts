import { Component, Vue } from 'vue-property-decorator';

import { Tag, Container } from '~/core';
import { City, ICitiesService, ICitiesServiceId, LoadingComponent } from '~/shared';
import { CityAddComponent } from '~/cities/shared';

import Template from './city-list.component.html?style=cities/city-list/city-list.component.css';

@Template
@Component({
    components: {
        [Tag(CityAddComponent)]: CityAddComponent,
        [Tag(LoadingComponent)]: LoadingComponent,
    }
})
export default class CityListComponent extends Vue {
    public cities: City[] = null;
    public a = 1;

    @Container<ICitiesService>(ICitiesServiceId)
    private citiesService: ICitiesService;

    public async created() {
        // Fake example with loading
        setTimeout(async () => {
            this.cities = await this.citiesService.get();
        }, 2000);
    }

    public remove(id: number) {
        this.citiesService.remove(id);
    }
}
