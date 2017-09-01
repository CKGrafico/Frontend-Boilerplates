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
                name: 'city-list',
                component: CityListComponent
            },
            {
                path: ':id',
                name: 'city-detail',
                component: CityDetailComponent,
                props: true
            }
        ]
    }
];