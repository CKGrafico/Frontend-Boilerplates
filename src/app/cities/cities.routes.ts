import { RouteConfig } from 'vue-router';
import { dynamicRoute } from '~/core/helpers';

export default (): RouteConfig[] => {
    return [
        {
            path: '/cities',
            name: 'cities',
            component: dynamicRoute('./cities.component.vue'),
            children: [
                {
                    path: '',
                    name: 'city-list',
                    component: dynamicRoute('./city-list/city-list.component.vue')
                },
                {
                    path: ':id',
                    name: 'city-detail',
                    component: dynamicRoute('./city-detail/city-detail.component.vue'),
                    props: true
                }
            ]
        }
    ];
};