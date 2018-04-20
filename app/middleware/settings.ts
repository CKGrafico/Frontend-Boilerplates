export default async ({ store, req }) => {
    if (store.state.settings.loaded) {
        return;
    }

    await store.dispatch('settings/load');
};