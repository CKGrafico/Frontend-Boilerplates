<template>
    <div>hola</div>
</template>

<script lang="ts">
import { Vue, Prop, Watch } from 'vue-property-decorator';
import Component from 'nuxt-class-component';
import { ChoicerComponent } from '~/components/shared';

@Component
export default class WizardComponent extends Vue {}
</script>

<style compile lang="scss" scoped>
.wizard {}
</style>