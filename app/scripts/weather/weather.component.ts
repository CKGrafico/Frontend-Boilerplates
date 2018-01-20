import { Component, Vue } from 'vue-property-decorator';

import Template from './weather.component.html?style=weather/weather.component.css';

@Template
@Component
export default class WeatherComponent extends Vue {
}
