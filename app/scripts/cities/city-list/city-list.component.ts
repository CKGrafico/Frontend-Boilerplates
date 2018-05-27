import { Component, Vue } from 'vue-property-decorator';

import { Container } from '~/core';
import { City, ICitiesService, ICitiesServiceId, LoadingComponent } from '~/shared';
import { CityAddComponent } from '~/cities/shared';

@Component({
    components: {
        CityAddComponent,
        LoadingComponent,
    }
})
export default class CityListComponent extends Vue {
    public cities: City[] = null;

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
