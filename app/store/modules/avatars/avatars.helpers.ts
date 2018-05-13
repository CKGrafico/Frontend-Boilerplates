import { injectable } from 'inversify';

export interface IAvatarsHelper {
}

@injectable()
export class AvatarsHelper implements IAvatarsHelper {}

export const IAvatarsHelperId = Symbol('IAvatarsHelper');