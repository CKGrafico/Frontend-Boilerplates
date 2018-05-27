import { RouteConfig } from 'vue-router';

export default (): RouteConfig[] => {
    return [
        {
            path: '/cities',
            name: 'cities',
            component: () => import('./cities.component.html.vue').then(m => m.default || m),
            children: [
                {
                    path: '',
                    name: 'city-list',
                    component: () => import('./city-list/city-list.component.html.vue').then(m => m.default || m)
                },
                {
                    path: ':id',
                    name: 'city-detail',
                    component: () => import('./city-detail/city-detail.component.html.vue').then(m => m.default || m),
                    props: true
                }
            ]
        }
    ];
};