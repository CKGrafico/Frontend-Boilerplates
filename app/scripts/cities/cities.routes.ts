import { RouteConfig } from 'vue-router';
import { CityListComponent } from './city-list';
import { CityDetailComponent } from './city-detail';

export let citiesRoutes: RouteConfig[] = [
    {
        path: '/cities',
        name: 'cities',
        component: () => import('./cities.component'),
        children: [
            {
                path: '',
                name: CityListComponent.tag,
                component: CityListComponent
            },
            {
                path: ':id',
                name: CityDetailComponent.tag,
                component: CityDetailComponent,
                props: true
            }
        ]
    }
];