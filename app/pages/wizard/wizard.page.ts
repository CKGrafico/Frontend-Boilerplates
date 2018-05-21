import { Vue } from 'vue-property-decorator';
import Component, { namespace } from 'nuxt-class-component';

import { Container } from '~/core';
import { IRandomizerHelper, IRandomizerHelperId } from '~/helpers';

import { ChoicerComponent } from '~/components/shared';
import { AvatarComponent } from '~/components/wizard';
import { avatarsModule } from '~/store/modules';

const AvatarsModule = namespace(avatarsModule.AvatarsStore.id);

@Component({
  components: {
    ChoicerComponent,
    AvatarComponent
  }
})
export default class WizardPage extends Vue {
    @Container<IRandomizerHelper>(IRandomizerHelperId) randomizerHelper: IRandomizerHelper;

    @AvatarsModule.State faceParts: avatarsModule.AvatarsFace;

    public selectedEyes: string = null;
    public selectedNose: string = null;
    public selectedMouth: string = null;
    public selectedColor: string = null;

    public async fetch({ store }): Promise<void> {
        await store.dispatch(`avatars/fetch`);
    }

    public created(): void {
        this.selectedEyes = this.faceParts.eyes[this.randomizerHelper.generate(0, this.faceParts.eyes.length - 1)];
        this.selectedNose = this.faceParts.nose[this.randomizerHelper.generate(0, this.faceParts.nose.length - 1)];
        this.selectedMouth = this.faceParts.mouth[this.randomizerHelper.generate(0, this.faceParts.mouth.length - 1)];
    }
}