import { RouteConfig } from 'vue-router';
import { WeatherListComponent } from './weather-list';
import { WeatherDetailComponent } from './weather-detail';

export let weatherRoutes: RouteConfig[] = [
    {
        path: '/weather',
        name: 'weather',
        component: () => import('./weather.component'),
        children: [
            {
                path: '',
                name: 'weather-list',
                component: WeatherListComponent
            },
            {
                path: ':id',
                name: 'weather-detail',
                component: WeatherDetailComponent,
                props: true
            }
        ]
    }
];