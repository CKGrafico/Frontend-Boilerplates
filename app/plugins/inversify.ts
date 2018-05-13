import { IStoreModule, IStoreModuleId } from '~/core';
import { container } from '~/store/store.container';

export default ({ app, store }) => {
    const modules = container.getAll<IStoreModule>(IStoreModuleId);

    Object.keys(store).forEach(key => {
        // We want to add plugins to our injected stores
        if (!key.includes('$')) {
            return;
        }

        modules.forEach(module => {
            if (module[key]) {
                return;
            }

            module[key] = store[key];
        });
    });
};