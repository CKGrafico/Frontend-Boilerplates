import { Container } from 'inversify';
import { TextService, ITextService, ITextServiceId } from './text';

export let citiesContainerBuilder = (container: Container) => {

    // Bind services
    container.bind<ITextService>(ITextServiceId).to(TextService).inSingletonScope();
};