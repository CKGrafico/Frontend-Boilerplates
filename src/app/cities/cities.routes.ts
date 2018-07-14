import { RouteConfig } from 'vue-router';

export default (): RouteConfig[] => {
    return [
        {
            path: '/cities',
            name: 'cities',
            component: () => import('./cities.component.vue'),
            children: [
                {
                    path: '',
                    name: 'city-list',
                    component: () => import('./city-list/city-list.component.vue')
                },
                {
                    path: ':id',
                    name: 'city-detail',
                    component: () => import('./city-detail/city-detail.component.vue'),
                    props: true
                }
            ]
        }
    ];
};