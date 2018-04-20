<template>
    <div>{{eyes}} hola!</div>
</template>

<script lang="ts">
import { Vue, Prop, Watch } from 'vue-property-decorator';
import Component from 'nuxt-class-component';

@Component
export default class AvatarComponent extends Vue {
    @Prop({type: String, required: true})
    eyes: string;

    @Prop({type: String, required: true})
    nose: string;

    @Prop({type: String, required: true})
    mouth: string;

    @Prop({type: String, required: true})
    color: string;
}
</script>

<style compile lang="scss" scoped>
.wizard {}
</style>