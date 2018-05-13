import { injectable } from 'inversify';
import VueRouter from 'vue-router';

// The motivation of this file is to have Store plugins typed
@injectable()
export abstract class StorePluginsTypes {
    $axios: any;
    $router: VueRouter;
}