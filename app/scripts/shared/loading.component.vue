<template>
<section>
  <div class="loading" v-if="active"></div>
</section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class extends Vue {
  @Prop({ type: Boolean, default: false })
  public active: boolean;
}
</script>

<style scoped>
.loading {
  animation: spin 1.3s linear infinite;
  border-color: red transparent;
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