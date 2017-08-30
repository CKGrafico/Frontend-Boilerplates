import VueRouter from 'vue-router';
import { Vue } from 'vue-property-decorator';
import { citiesRoutes } from './cities';

Vue.use(VueRouter);

export function router() {
    let router: VueRouter;

    router = new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/',
                redirect: '/cities',
            },
            ...citiesRoutes
        ]
    });

    return router;
}