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

    public selectedEyes: string = null;
    public selectedNose: string = null;
    public selectedMouth: string = null;
    public selectedColor: string = null;

    public async fetch({ store }): Promise<void> {
        await store.dispatch(`avatars/fetch`);
    }

    public created(): void {
        this.selectedEyes = this.faceParts.eyes[randomizer.generate(0, this.faceParts.eyes.length - 1)];
        this.selectedNose = this.faceParts.nose[randomizer.generate(0, this.faceParts.nose.length - 1)];
        this.selectedMouth = this.faceParts.mouth[randomizer.generate(0, this.faceParts.mouth.length - 1)];
        this.selectedColor = randomizer.color();
    }
}