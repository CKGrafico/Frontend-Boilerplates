import { inject } from 'inversify-props';
import 'reflect-metadata';
import { Vue } from 'vue-property-decorator';
import { ITranslateService } from '~/shared';
import { containerBuilder } from './app/app.container';
import { Filters } from './app/app.filters';
import { router } from './app/app.router';
import store from './app/app.store';
import App from './app/App.vue';
import { CitiesSeed } from './app/core/seeds';
import { installVendorPlugins } from './app/vendor';
import './styles/app.scss';

export class AppModule {
  @inject() translateService: ITranslateService;

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

    const options = {
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
