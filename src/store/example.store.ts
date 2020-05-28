import { createStore, ReducerType, useStore } from 'react-hookstore';
import { GenericPayload } from '~/app/core';

const name = 'ROOT/EXAMPLE';

enum Type {
  ADD_TO_FIRST = 'ROOT/EXAMPLE/ADD_TO_FIRST',
  ADD_TO_SECOND = 'ROOT/EXAMPLE/ADD_TO_SECOND'
}

type Payload = GenericPayload<Type>;

interface State {
  property1: number;
  property2: number;
}

const state: State = {
  property1: 0,
  property2: 1
};

const reducers: ReducerType<State, Payload> = function (state: State, { type, payload }) {
  switch (type) {
    case Type.ADD_TO_FIRST:
      return { ...state, property1: state.property1 + payload };
    case Type.ADD_TO_SECOND:
      return { ...state, property1: state.property2 + payload };
    default:
      return { ...state };
  }
};

const store = createStore<State>(name, state, reducers);

export const ExampleStoreType = Type;
export const useExampleStore = () => useStore<State>(store);
