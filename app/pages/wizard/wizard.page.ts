import { Vue } from 'vue-property-decorator';
import Component, { State, namespace } from 'nuxt-class-component';

import { randomizer } from '~/helpers/randomizer';

import { LoadingComponent } from '~/components/shared';
import { AvatarComponent } from '~/components/wizard';

import * as avatarsStore from '~/store/modules/avatars';
import { AvatarsFace } from '~/store/modules/avatars';

const AvatarsState = namespace(avatarsStore.name, State);

@Component({
  components: {
    LoadingComponent,
    AvatarComponent
  }
})
export default class WizardPage extends Vue {
    @AvatarsState faceParts: AvatarsFace;

    public selectedEyes = 'eyes1';
    public selectedNose = 'nose2';
    public selectedMouth = 'mouth1';
    public selectedColor = randomizer.color();

    public async fetch({ store }): Promise<void> {
        await store.dispatch(`avatars/fetch`);
    }
}