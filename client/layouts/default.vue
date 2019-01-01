<template>
  <section class="layout">
    <nuxt/>
  </section>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import Component, { namespace } from 'nuxt-class-component';

@Component
export default class extends Vue {}
</script>

<style lang='scss' scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>


