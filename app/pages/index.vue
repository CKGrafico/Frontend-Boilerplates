<template>
  <div></div>
</template>

<script lang='ts'>
import { Vue } from 'vue-property-decorator';
import Component from 'nuxt-class-component';

@Component
export default class IndexPage extends Vue {
  fetch ({ params, redirect }) {
    redirect(301, '/login');
  }
}
</script>