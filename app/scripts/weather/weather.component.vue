<template>
  <section class="weather container-medium">
    <header class="weather-header text-big">{{'weather.title' | t }}</header>
    <router-view></router-view>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class WeatherComponent extends Vue {}
</script>

<style lang="scss" scoped>
@import '~/variables';

.weather {
  &-header {
    color: $color-brand;
  }
}
</style>