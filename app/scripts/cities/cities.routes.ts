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
            // {
            //     path: '/:id',
            //     name: 'city-detail',
            //     component: CityDetailComponent,
            //     props: true
            // },
            // {
            //     path: '/:id/edit',
            //     name: 'city-edit',
            //     component: CityEditComponent,
            //     props: true
            // }
        ]
    }
];