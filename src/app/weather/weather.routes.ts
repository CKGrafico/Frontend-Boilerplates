import { RouteConfig } from 'vue-router';
import { dynamicRoute } from '~/core/helpers';

export default (): RouteConfig[] => {
    return [
        {
            path: '/weather',
            name: 'weather',
            component: dynamicRoute('./weather.component.vue'),
            children: [
                {
                    path: '',
                    name: 'weather-list',
                    component: dynamicRoute('./weather-list/weather-list.component.vue')
                },
                {
                    path: ':id',
                    name: 'weather-detail',
                    component: dynamicRoute('./weather-detail/weather-detail.component.vue'),
                    props: true
                }
            ]
        }
    ];
};