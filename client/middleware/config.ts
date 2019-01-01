export default async ({ store }) => {
  await store.dispatch('config/load');
};
