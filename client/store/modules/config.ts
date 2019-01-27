
import { ActionTree, MutationTree, GetterTree } from 'vuex';

export const namespaced = true;

export enum Type {
  SET_SETTINGS = 'SET_SETTINGS'
}

export interface State {
  settings: {
    [key: string]: string;
  };
}

export const state = (): State => ({
  settings: null
});
export const getters: GetterTree<State, any> = {};

export const actions: ActionTree<State, any> = {
  async load({ commit, state }) {
    if (state.settings) {
      return;
    }

    if (process.server) {
      const settingsController = require('~~/server/api/settings/settings.controller');
      const settings = settingsController.settings;
      commit(Type.SET_SETTINGS, settings);

      return;
    }

    const results = await fetch('/api/settings');

    if (!results.ok) {
      throw new Error('Cannot fetch settings');
    }

    const settings = await results.json();
    commit(Type.SET_SETTINGS, settings);
  }
};

export const mutations: MutationTree<State> = {
  [Type.SET_SETTINGS](state, settings) {
    state.settings = settings;
  },
};
