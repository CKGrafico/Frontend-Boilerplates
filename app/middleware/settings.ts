export default async ({ store, req }) => {
    if (process.server || store.state.settings.loaded) {
        return;
    }

    await store.dispatch('settings/load');
};