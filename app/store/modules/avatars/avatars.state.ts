
export interface AvatarsFace {
    eyes: string[];
    nouse: string[];
    mouth: string[];
}

export interface State {
    faceParts: AvatarsFace;
}

export const state = (): State => ({
    faceParts: null
});