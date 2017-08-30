import VueRouter from 'vue-router';
import { Vue } from 'vue-property-decorator';
import { citiesRoutes } from './cities';
import { weatherRoutes } from './weather';

Vue.use(VueRouter);

export function router() {
    let router: VueRouter;

    router = new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/',
                redirect: '/weather',
            },
            ...citiesRoutes,
            ...weatherRoutes
        ]
    });

    return router;
}