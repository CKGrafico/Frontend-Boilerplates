import 'reflect-metadata';
import { Vue } from 'vue-property-decorator';
import { Inject } from 'inversify-props';

import { ITranslateService } from '~/shared';
import { installVendorPlugins } from './app/vendor';
import { CitiesSeed } from './app/core/seeds';
import { router } from './app/app.router';
import { containerBuilder } from './app/app.container';
import { Filters } from './app/app.filters';
import store from './app/app.store';
import App from './app/App.vue';

import './styles/app.scss';

export class AppModule {
    @Inject() translateService: ITranslateService;

    constructor() {
        containerBuilder();

        Vue.use(new Filters());
        installVendorPlugins();

        this.bootstrap();
    }

    private async seed(): Promise<void> {
        await new CitiesSeed().initialize();
    }

    private async bootstrap(): Promise<Vue> {
        await this.seed();

        let options = {
            el: '#app',
            router: router(),
            store,
            i18n: this.translateService.i18n,
            render: create => create(App)
        };

        return new Vue(options);
    }
}

new AppModule();
