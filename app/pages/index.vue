<template>
  <div>I'm the example of a simple page</div>
</template>

<script lang='ts'>
import { Vue } from 'vue-property-decorator';
import Component from 'nuxt-class-component';

@Component
export default class IndexPage extends Vue {
  async fetch ({ params, redirect }) {
    redirect(301, '/wizard');
  }
}
</script>