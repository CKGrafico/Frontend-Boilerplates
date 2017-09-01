import { RouteConfig } from 'vue-router';

export let citiesRoutes: RouteConfig[] = [
    {
        path: '/cities',
        name: 'cities',
        component: () => import('./cities.component'),
        children: [
            {
                path: '',
                name: 'city-list',
                component: () => import('./city-list/city-list.component')
            },
            {
                path: ':id',
                name: 'city-detail',
                component:  () => import('./city-detail/city-detail.component'),
                props: true
            }
        ]
    }
];