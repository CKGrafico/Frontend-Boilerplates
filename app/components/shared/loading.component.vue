<template>
  <div class="loading" :style="{'font-size': `${size}px`}" :class="{'loading--fat': fat}">
    <div class="loading-spinner"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop } from 'vue-property-decorator';
import Component from 'nuxt-class-component';

@Component
export default class LoadingComponent extends Vue {
  public size = 16;

  @Prop({type: Boolean, default: false})
  fat: boolean;
}
</script>

<style lang="scss" scoped>
@import '~/variables';
// from: https://codepen.io/WebSonata/pen/bRaONB

.loading {
  display: flex;
  height: 100%;
  left: 0;
  position: relative;
  top: 0;
  width: 100%;
  z-index: 100;

  &-spinner {
    $size: 3em;
    $border: 1px;

    animation: loading-spin 2s linear infinite;
    border: $border solid transparent;
    border-radius: 50%;
    border-top-color: $color-secondary;
    display: block;
    height: $size;
    position: relative;
    width: $size;

    &:before {
      $distance: .4em;

      animation: loading-spin 3s linear infinite;
      border: $border solid transparent;
      border-radius: 50%;
      border-top-color: $color-secondary-dark;
      bottom: $distance;
      content: '';
      left: $distance;
      position: absolute;
      right: $distance;
      top: $distance;
    }

    &:after {
      $distance: 1em;

      animation: loading-spin 1.5s linear infinite;
      border: $border solid transparent;
      border-radius: 50%;
      border-top-color: $color-secondary-darker;
      bottom: $distance;
      content: '';
      left: $distance;
      position: absolute;
      right: $distance;
      top: $distance;
    }
  }

  &--fat &-spinner {
    &,
    &:before,
    &:after {
      border-width: 3px;
    }
  }
}

@keyframes loading-spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>