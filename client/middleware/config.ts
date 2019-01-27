/**
 * Load settings to use in the website
 */
export default async ({ store }) => {
  await store.dispatch('config/load');
};
