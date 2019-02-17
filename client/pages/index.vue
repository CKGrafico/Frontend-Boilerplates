<template>
  <section class='home container'>
    <nuxt-link :to="localePath('other')">{{$t('navigation.other')}}</nuxt-link>

    <p v-if="exampleData">{{exampleData}}</p>
  </section>
</template>

<script lang='ts'>
import { Vue } from 'vue-property-decorator';
import Component from 'nuxt-class-component';
import { AsyncData, Inject } from '~/core';
import { IExampleService } from '~/services';

@Component
@AsyncData()
export default class extends Vue {
  public exampleData: number[] = null;
  @Inject() exampleService: IExampleService;

  public async asyncData({ self, error }): Promise<{}> {
    try {
      return {
        exampleData: await self.exampleService.get()
      };
    } catch (e) {
      error(e);
    }
  }
}
</script>

<style lang='scss' scoped>
.home {
  color: get-color(primary);
}
</style>
