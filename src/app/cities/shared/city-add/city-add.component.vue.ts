import { Component, Vue } from 'vue-property-decorator';

import { Inject } from '~/core';
import { City, ICitiesService } from '~/shared';

@Component
export default class CityAddComponent extends Vue {
    public city: City = null;
    public name = '';

    @Inject() citiesService: ICitiesService;

    public async search(): Promise<void> {
        if (!this.name) {
            return;
        }
        
        this.city = await this.citiesService.search(this.name);
    }
}
