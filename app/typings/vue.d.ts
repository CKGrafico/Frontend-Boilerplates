// Make sure to import 'vue' before declaring augmented types
import Vue from 'vue'
import VueRouter from 'vue-router';
import Toaster from 'v-toaster';

// Specify a file with the types you want to augment

declare module 'vue/types/vue' {
  // Declare augmentation for Vue
  interface Vue {
    $router: VueRouter;
    $t: (key: string, params?: any) => string;
  }
}


declare module 'vue/types/options' {
  // Declare augmentation for Options
  interface ComponentOptions<
    V extends Vue,
    Data=DefaultData<V>,
    Methods=DefaultMethods<V>,
    Computed=DefaultComputed,
    PropsDef=PropsDefinition<DefaultProps>,
    Props=DefaultProps> {

    middleware?: string;
  }
}
