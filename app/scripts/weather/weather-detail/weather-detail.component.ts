import { Component, BaseComponent, Tag, Prop } from '~/core';
import { container } from '~/app.container';

import Template from './weather-detail.component.html?style=weather/weather-detail/weather-detail.component.css';

@Template
@Component
export default class WeatherDetailComponent extends BaseComponent {
    @Prop()
    public id: number; 

    public async created() {
    }
}
