import Vue from 'vue'
import VueRouter from 'vue-router';

declare module 'vue/types/vue' {
    interface Vue {
        $router: VueRouter;
    }
}

declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}