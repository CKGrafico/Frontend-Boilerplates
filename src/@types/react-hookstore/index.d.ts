declare module 'react-hookstore' {
  type StateCallback<TState> = (state: TState) => void;

  type ReducerType<TState, TPayload> = (state: TState, payload: TPayload) => TState;

  type SetStateType<TState> = (state: TState, callback?: StateCallback<TState>) => void;

  type DispatchType<TState, TPayload> = (payload: TPayload, callback?: StateCallback<TState>) => void;

  export type StoreStateHookType<TState> = [TState, SetStateType<TState>];

  export type StoreDispatchHookType<TState, TPayload> = [TState, DispatchType<TState, TPayload>];

  const defaultReducer: ReducerType<any>;

  export interface StoreSpec<TState, TPayload> {
    state: TState;
    reducer: ReducerType<TState, TPayload>;
    setState: SetStateType<TState> | DispatchType<TState, TPayload>;
    setters: StateCallback<TState>[]
  }

  export interface StateStoreInterface<TState> {
    getState(): TState;
    setState: SetStateType<TState>;
  }

  export interface ReducerStoreInterface<TState, TPayload> {
    getState(): TState;
    dispatch: DispatchType<TState, TPayload>;
  }

  export function createStore<TState, TPayload>(name: string, state: TState, reducer: ReducerType<TState, TPayload>): ReducerStoreInterface<TState, TPayload>;

  export function createStore<TState>(name: string, state: TState): StateStoreInterface<TState>;

  export function getStoreByName<TState, TPayload>(name: string):  ReducerStoreInterface<TState, TPayload>;

  export function getStoreByName<TState>(name: string): StateStoreInterface<TState>;

  export function useStore<TState>(identifier: string): StoreStateHookType<TState>;

  export function useStore<TState, TPayload>(identifier: string): StoreDispatchHookType<TState, TPayload>;

  export function useStore<TState>(store: StateStoreInterface<TState>): StoreStateHookType<TState>;

  export function useStore<TState, TPayload>(store: ReducerStoreInterface<TState, TPayload>): StoreDispatchHookType<TState, TPayload>;
}
