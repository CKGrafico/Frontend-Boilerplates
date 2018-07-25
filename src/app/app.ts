import { Vue } from 'vue-property-decorator';

import { CitiesSeed } from './core/seeds';
import { router } from './app.router';
import { containerBuilder } from './app.container';
import { Filters } from './app.filters';
import BootstrapVue from 'bootstrap-vue';

import { default as AppComponent } from './app.component.vue';

export class App {
    constructor() {
        containerBuilder();

        Vue.use(BootstrapVue);
        Vue.use(new Filters());

        this.bootstrap();
    }

    private async seed(): Promise<void> {
        await new CitiesSeed().initialize();
    }

    private async bootstrap(): Promise<Vue> {
        await this.seed();

        let options = {
            el: '.main',
            router: router(),
            render: create => create(AppComponent)
        };

        return new Vue(options);
    }
}

new App();