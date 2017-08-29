import { Component, Vue } from 'vue-property-decorator';

import Template from './cities.component.html?style=cities/cities.component.css';
import { citiesService, City } from '../shared';

@Template
@Component
export default class CitiesComponent extends Vue {
    public cities: City[] = null;

    public async created() {
        // Get service from container
        // Fetch data
        this.cities = await citiesService.get();
        // Show data
    }
}
