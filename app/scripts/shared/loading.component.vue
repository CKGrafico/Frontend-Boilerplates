<template>
<div class="loading"></div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class LoadingComponent extends Vue {}
</script>

<style lang="scss" scoped>
@import '~/variables';

.loading {
  animation: spin 1.3s linear infinite;
  border-color: $color-foreground-brighter transparent;
  border-radius: 50%;
  border-style: solid;
  border-width: .12em;
  height: 1.1em;
  position: relative;
  top: .2em;
  width: 1.1em;
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