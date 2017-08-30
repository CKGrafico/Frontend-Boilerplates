import { Component, Vue } from 'vue-property-decorator';

import Template from './cities.component.html?style=cities/cities.component.css';
import { container } from '../app.container';
import { ICitiesService, ICitiesServiceId } from '../shared';
import { ITextService, ITextServiceId } from './text';
import { City } from '../shared';

@Template
@Component
export default class CitiesComponent extends Vue {
    private textService: ITextService;
    private citiesService: ICitiesService;
    public cities: City[] = null;
    public texts: City[] = null;

    public async created() {
        this.citiesService = container.get<ICitiesService>(ICitiesServiceId);
        this.textService = container.get<ITextService>(ITextServiceId);
        
        [this.cities, this.texts] = [await this.citiesService.get(), await this.textService.get()];
    }
}
