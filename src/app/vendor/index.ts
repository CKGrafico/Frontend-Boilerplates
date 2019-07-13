import { Vue } from 'vue-property-decorator';

// Import Vue vendor
import * as bootstrap from './bootstrap';

const vendor = [
    ...(<any>Object).values(bootstrap)
];

export function installVendorPlugins() {
  vendor.forEach(library => {
    Vue.use(library);
  });
}
