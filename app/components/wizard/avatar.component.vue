<template>
    <div class="avatar">
        <div class="avatar-image">
            <loading class="avatar-loading" v-if="isLoading" :size="40" />

            <transition name="fade">
                <img class="avatar-src" v-if="!isLoading" :src="`${apiUrl}/face/${eyes}/${nose}/${mouth}/${color}`" />
            </transition>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Prop, Watch } from 'vue-property-decorator';
import Component, { State, namespace } from 'nuxt-class-component';

import { randomizer } from '~/helpers';

import { LoadingComponent } from '~/components/shared';

import * as settingStore from '~/store/modules/settings';

const SettingsState = namespace(settingStore.name, State);

@Component({
  components: {
    LoadingComponent
  }
})
export default class AvatarComponent extends Vue {
    @SettingsState apiUrl: string;

    public isLoading = false;
    public color = randomizer.color();

    @Prop({type: String, required: true})
    eyes: string;

    @Prop({type: String, required: true})
    nose: string;

    @Prop({type: String, required: true})
    mouth: string;


    @Watch('eyes')
    public onWatchEyes = () => this.reload()

    @Watch('nose')
    public onWatchNose = () => this.reload()

    @Watch('mouth')
    public onWatchEyes = () => this.reload()

    public reload(): void {
        // Fake to show loading component
        this.color = randomizer.color();
        this.isLoading = true;
        setTimeout(() => {
            this.isLoading = false;
        }, 1000);
    }
}
</script>

<style compile lang="scss" scoped>
@import '~/variables';

.avatar {
  &-image {
    $size: 20rem;

    align-content: center;
    align-items: center;
    display: flex;
    height: $size;
    justify-content: center;
    margin: 0 auto;
    position: relative;
    width: $size;
  }

  &-src {
    border-radius: 10%;
    max-width: 100%;
  }

  &-loading {
    position: absolute !important;
    z-index: 100;
  }
}
</style>