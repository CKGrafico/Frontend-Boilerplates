<template>
  <div class="loading">
    <div class="loading-spinner"></div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import Component from 'nuxt-class-component';

@Component
export default class LoadingComponent extends Vue {}
</script>

<style lang="scss" scoped>
@import '~/variables';
// from: https://codepen.io/WebSonata/pen/bRaONB

.loading {
  background: $color-brand;
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 100;

  &-spinner {
    animation: spin 2s linear infinite;
    border: 3px solid transparent;
    border-radius: 50%;
    border-top-color: $color-secondary;
    display: block;
    height: 150px;
    left: 50%;
    margin: -75px 0 0 -75px;
    position: relative;
    top: 50%;
    width: 150px;

    &:before {
      animation: spin 3s linear infinite;
      border: 3px solid transparent;
      border-radius: 50%;
      border-top-color: $color-secondary-dark;
      bottom: 5px;
      content: '';
      left: 5px;
      position: absolute;
      right: 5px;
      top: 5px;
    }

    &:after {
      animation: spin 1.5s linear infinite;
      border: 3px solid transparent;
      border-radius: 50%;
      border-top-color: $color-secondary-darker;
      bottom: 15px;
      content: '';
      left: 15px;
      position: absolute;
      right: 15px;
      top: 15px;
    }
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>