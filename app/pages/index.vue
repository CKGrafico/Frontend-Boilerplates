<template>
<section>
  {{ $t('app.title') }}
  <Loading :active="true"/>
</section>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'nuxt-class-component';
import { Action, Getter, namespace } from 'vuex-class';

import Loading from '~/components/Loading.vue';

import * as color from '~/store/modules/color';

const ColorGetter = namespace(color.name, Getter);
const ColorAction = namespace(color.name, Action);

@Component({
  components: {
    Loading
  }
})
export default class extends Vue {
  @ColorGetter color;
  @ColorAction generateColor;

  public created(): void {
  }
}
</script>
