<template>
  <div class="loading" :style="{'font-size': `${size}px`}" :class="{'loading--fat': fat, 'loading--bright': bright}">
    <div class="loading-spinner"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop } from 'vue-property-decorator';
import Component from 'nuxt-class-component';

@Component
export default class LoadingComponent extends Vue {
  @Prop({type: Number, default: 16})
  public size: number;

  @Prop({type: Boolean, default: false})
  fat: boolean;

  @Prop({type: Boolean, default: false})
  bright: boolean;
}
</script>

<style lang="scss" scoped>
@import '~/variables';
// from: https://codepen.io/WebSonata/pen/bRaONB

.loading {
  display: flex;
  position: relative;
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

  &--bright &-spinner {
    &,
    &:before,
    &:after {
      border-top-color: $color-foreground-brighter;
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