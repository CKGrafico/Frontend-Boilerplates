<template>
  <section class='other container'>
    <nuxt-link :to="localePath('index')">{{$t('navigation.home')}}</nuxt-link>

    <button @click="onClickLoad">[EX]</button>
    <p v-if="exampleData">{{exampleData}}</p>

  </section>
</template>

<script lang='ts'>
import { Vue } from 'vue-property-decorator';
import Component from 'nuxt-class-component';
import { IExampleService } from '~/services';
import { Inject } from '~/core';

@Component
export default class extends Vue {
  public exampleData: number[] = null;
  @Inject() exampleService: IExampleService;

  public async onClickLoad(): Promise<void> {
    this.exampleData = await this.exampleService.get();
  }
}
</script>

<style lang='scss' scoped>
.other {
  color: get-color(secondary);
}
</style>
