<template>
    <div class="avatar">
        <img class="avatar-image" :src="`${apiUrl}/face/${eyes}/${nose}/${mouth}/${color}`" />
    </div>
</template>

<script lang="ts">
import { Vue, Prop, Watch } from 'vue-property-decorator';
import Component, { State, namespace } from 'nuxt-class-component';

import * as settingStore from '~/store/modules/settings';

const SettingsState = namespace(settingStore.name, State);

@Component
export default class AvatarComponent extends Vue {
    @SettingsState apiUrl: string;

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
.avatar {}
</style>