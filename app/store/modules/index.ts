import * as rootModule from './root';
import * as settingsModule from './settings';
import * as userModule from './user';
import * as avatarsModule from './avatars';

export {
    rootModule,
    settingsModule,
    userModule,
    avatarsModule
};

export interface ModulesStates {
    settings: settingsModule.State;
    user: userModule.State;
    avatars: avatarsModule.State;
}

export type RootState = rootModule.State & ModulesStates;