import { RouteConfig } from 'vue-router';

export let weatherRoutes: RouteConfig[] = [
    {
        path: '/weather',
        name: 'weather',
        component: () => import('./weather.component'),
        children: [
            {
                path: '',
                name: 'weather-list',
                component: () => import('./weather-list/weather-list.component')
            },
            {
                path: ':id',
                name: 'weather-detail',
                component: () => import('./weather-detail/weather-detail.component'),
                props: true
            }
        ]
    }
];