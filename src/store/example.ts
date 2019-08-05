import { createStore, ReducerType, useStore } from 'react-hookstore';

const name = 'myexample';

enum Type {
  ADD_TO_FIRST = 'ADD_TO_FIRST',
  ADD_TO_SECOND = 'ADD_TO_SECOND'
}

type Payload = {
  type: Type;
  payload: any;
};

type State = {
  property1: number
  property2: number
};

const state: State = {
  property1: 0,
  property2: 1
};

const reducers: ReducerType<State, Payload> = function(state: State, { type, payload }) {
  switch (type) {
    case Type.ADD_TO_FIRST:
      return { ...state, property1: state.property1 + payload };
    case Type.ADD_TO_SECOND:
      return { ...state, property1: state.property2 + payload };
    default:
      return { ...state };
  }
};

createStore<State, Payload>(name, state, reducers);

export const ExampleStoreType = Type;
export type ExampleStoreState = State;
export const useExampleStore = () => useStore<State, Payload>(name);


