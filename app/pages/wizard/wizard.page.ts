import { Vue } from 'vue-property-decorator';
import Component from 'nuxt-class-component';

import { LoadingComponent } from '~/components/shared';

@Component({
  components: {
    LoadingComponent
  }
})
export default class WizardPage extends Vue {}