import * as root from './root';
import * as settings from './modules/settings';
import * as user from './modules/user';
import * as avatars from './modules/avatars';

// More info about store: https://vuex.vuejs.org/en/core-concepts.html
// Structure of the store:
    // Types: Types that represent the keys of the mutations to commit
    // State: The information of our app, we can get or update it.
    // Helpers: Small methods that have logic for this module
    // Getters: Get complex information from state
    // Action: Sync or async operations that commit mutations
    // Mutations: Modify the state

export const modules = {
    [settings.name]: settings,
    [user.name]: user,
    [avatars.name]: avatars
};

interface ModulesStates {
    settings: settings.State;
    user: user.State;
    avatars: avatars.State;
}

export type RootState = root.State & ModulesStates;

export const state = root.state;
export const getters = root.getters;
export const actions = root.actions;
export const mutations = root.mutations;