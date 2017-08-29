import { Container } from 'inversify';
import { TextService, ITextService, ITextServiceIdentifier } from './text';

export let citiesContainerBuilder = (container: Container) => {

    // Bind services
    container.bind<ITextService>(ITextServiceIdentifier).to(TextService).inSingletonScope();
};