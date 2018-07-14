import { RouteConfig } from 'vue-router';

export default (): RouteConfig[] => {
    return [
        {
            path: '/weather',
            name: 'weather',
            component: () => import('./weather.component.vue'),
            children: [
                {
                    path: '',
                    name: 'weather-list',
                    component: () => import('./weather-list/weather-list.component.vue')
                },
                {
                    path: ':id',
                    name: 'weather-detail',
                    component: () => import('./weather-detail/weather-detail.component.vue'),
                    props: true
                }
            ]
        }
    ];
};