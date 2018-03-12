import * as root from './root';
import * as i18n from './modules/i18n';
import * as color from './modules/color';
import * as complex from './modules/complex';

// More info about store: https://vuex.vuejs.org/en/core-concepts.html
// Structure of the store:
    // Types: Types that represent the keys of the mutations to commit
    // State: The information of our app, we can get or update it.
    // Helpers: Small methods that have logic for this module
    // Getters: Get complex information from state
    // Action: Sync or async operations that commit mutations
    // Mutations: Modify the state

export const modules = {
    [i18n.name]: i18n,
    [color.name]: color,
    [complex.name]: complex
};

interface ModulesStates {
    i18n: i18n.State;
    color: color.State;
    complex: complex.State;
}

export type RootState = root.State & ModulesStates;

export const state = root.state;
export const getters = root.getters;
export const actions = root.actions;
export const mutations = root.mutations;