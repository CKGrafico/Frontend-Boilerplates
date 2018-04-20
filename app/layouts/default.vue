<template>
  <div class="layout d-flex">
    <div class="layout-content">
      <nuxt/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/variables';

.layout {
  height: 100vh;

  &-content {
    width: 100%;
  }
}

</style>

<script lang='ts'>
import Vue from 'vue';
import Component from 'nuxt-class-component';


@Component
export default class DefaultLayout extends Vue {}
</script>