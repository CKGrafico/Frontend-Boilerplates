import { RouteConfig } from 'vue-router';

export default (): RouteConfig[] => {
    return [
        {
            path: '/weather',
            name: 'weather',
            component: () => import('./weather.component.vue').then(m => m.default || m),
            children: [
                {
                    path: '',
                    name: 'weather-list',
                    component: () => import('./weather-list/weather-list.component.html.vue').then(m => m.default || m)
                },
                {
                    path: ':id',
                    name: 'weather-detail',
                    component: () => import('./weather-detail/weather-detail.component.html.vue').then(m => m.default || m),
                    props: true
                }
            ]
        }
    ];
};