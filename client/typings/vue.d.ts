import Vue from 'vue'
import VueRouter from 'vue-router';
import VueI18n, { IVueI18n } from 'vue-i18n';

declare module 'vue/types/vue' {
    interface Vue {
        $router: VueRouter;
        readonly $i18n: VueI18n & IVueI18n;
        localePath(route: string | any, locale?: string): string; // Temporal https://cmty.app/nuxt/nuxt-i18n/issues/c180
    }
}
