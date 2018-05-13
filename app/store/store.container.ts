import 'reflect-metadata';
import { Container } from 'inversify';
import { IStoreModule, IStoreModuleId } from '~/core';
import * as m from '~/store/modules';
import * as h from '~/helpers';

// Injecting a dependency into a store or helper
// constructor(@inject(ICloneHelperId) cloneHelper: ICloneHelper) {}

// Injecting a dependency into a component as property
// @Container<ICloneHelper>(ICloneHelperId) cloneHelper: ICloneHelper;

export let container: Container = null;

export function containerBuilder(): Container {
    container = new Container();

    // Bind helpers
    container.bind<h.IRandomizerHelper>(h.IRandomizerHelperId).to(h.RandomizerHelper).inSingletonScope();
    
    // Bind Store Helpers
    container.bind<m.avatarsModule.IAvatarsHelper>(m.avatarsModule.IAvatarsHelperId).to(m.avatarsModule.AvatarsHelper).inSingletonScope();

    // Bind Store Modules
    container.bind<IStoreModule>(IStoreModuleId).to(m.avatarsModule.AvatarsStore).inSingletonScope();
    container.bind<IStoreModule>(IStoreModuleId).to(m.settingsModule.SettingsStore).inSingletonScope();
    container.bind<IStoreModule>(IStoreModuleId).to(m.userModule.UsersStore).inSingletonScope();

    return container;
}
