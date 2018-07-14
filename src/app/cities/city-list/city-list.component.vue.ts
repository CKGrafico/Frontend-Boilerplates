import { Component, Vue } from 'vue-property-decorator';

import { Inject } from '~/core';
import { City, ICitiesService, LoadingComponent } from '~/shared';
import { CityAddComponent } from '~/cities/shared';

@Component({
    components: {
        CityAddComponent,
        LoadingComponent,
    }
})
export default class CityListComponent extends Vue {
    public cities: City[] = null;

    @Inject() citiesService: ICitiesService;

    public async created(): Promise<void> {
        // Fake example with loading
        setTimeout(async () => {
            this.cities = await this.citiesService.get();
        }, 2000);
    }

    public remove(id: number): void {
        this.citiesService.remove(id);
    }
}
