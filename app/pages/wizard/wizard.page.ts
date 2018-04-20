import { Vue } from 'vue-property-decorator';
import Component, { State, namespace } from 'nuxt-class-component';

import { LoadingComponent } from '~/components/shared';

import * as avatarsStore from '~/store/modules/avatars';
import { AvatarsFace } from '~/store/modules/avatars';

const AvatarsState = namespace(avatarsStore.name, State);

@Component({
  components: {
    LoadingComponent
  }
})
export default class WizardPage extends Vue {

    @AvatarsState faceParts: AvatarsFace;

    public async fetch({ store }): Promise<void> {
        await store.dispatch(`avatars/fetch`);
    }

    created() {
        console.log(this.faceParts);
    }
}