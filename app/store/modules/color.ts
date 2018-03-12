import { ActionTree, MutationTree, GetterTree, ActionContext } from 'vuex';
import { RootState } from 'store';

// Note: If your file starts to increase, separate it into multiple files, one per export.

export const name = 'color';

export const types = {
    SET_RED: 'SET_RED',
    SET_GREEN: 'SET_GREEN',
    SET_BLUE: 'SET_BLUE'
};

export interface State {
    r: number;
    g: number;
    b: number;
}

export const state = (): State => ({
    r: 255,
    g: 255,
    b: 255
});

export const helpers = {
    randomColorFromBlackToX(max: number) {
        if (max > 255) {
            throw new Error('The maximum cannot be greater than 255');
        }

        return Math.floor(Math.random() * max);
    } 
};

export const getters: GetterTree<State, RootState> = {
    color(state: State): string {
        return `rgb(${state.r}, ${state.g}, ${state.b})`;
    }
};

export interface Actions<S, R> extends ActionTree<S, R> {
    generateColor(context: ActionContext<S, R>, seed: number): void;
}

export const actions: Actions<State, RootState> = {
    async generateColor({ commit, rootState }, seed: number): Promise<void> {
        return new Promise<void>(async (resolve, reject) => {
            setTimeout(() => {
                commit(types.SET_RED, helpers.randomColorFromBlackToX(seed));
                commit(types.SET_GREEN, helpers.randomColorFromBlackToX(seed));
                commit(types.SET_BLUE, helpers.randomColorFromBlackToX(seed));
            }, 1000);
        });
    }
};

export const mutations: MutationTree<State> = {
    [types.SET_RED](state, red: number): void {
        state.r = red;
    },
    [types.SET_GREEN](state, green: number): void {
        state.g = green;
    },
    [types.SET_BLUE](state, blue: number): void {
        state.b = blue;
    }
};

