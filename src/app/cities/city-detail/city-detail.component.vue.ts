import { Component, Vue, Prop } from 'vue-property-decorator';

import { Inject } from '~/core';
import { City, ICitiesService } from '~/shared';

@Component
export default class CityDetailComponent extends Vue {
    public city: City = null;

    @Inject() citiesService: ICitiesService;

    @Prop() id: number;

    get mapUrl(): string {
        return `https://www.bing.com/maps/embed?h=400&w=400&cp=${this.city.centroid[0]}~${this.city.centroid[1]}&lvl=12&typ=s&sty=r&src=SHELL&FORM=MBEDV8`;
    }

    public async created(): Promise<void> {
        this.city = await this.citiesService.getById(this.id);
    }
}
