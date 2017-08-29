import { Component, Vue } from 'vue-property-decorator';

import Template from './cities.component.html?style=cities/cities.component.css';
import { container } from '../app.container';
import { ICitiesService, ICitiesServiceIdentifier } from '../shared';
import { ITextService, ITextServiceIdentifier } from './text';
import { City } from '../shared';

@Template
@Component
export default class CitiesComponent extends Vue {
    private textService: ITextService;
    private citiesService: ICitiesService;
    public cities: City[] = null;
    public texts: City[] = null;

    public async created() {
        this.citiesService = container.get<ICitiesService>(ICitiesServiceIdentifier);
        this.textService = container.get<ITextService>(ITextServiceIdentifier);
        
        this.cities = await this.citiesService.get();
        this.texts = await this.textService.get();
    }
}
