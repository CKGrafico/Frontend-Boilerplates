import { useExampleStore, ExampleStoreType, ExampleStoreState } from '../../store';

export function useExample(): [ExampleStoreState, () => void] {
  const [state, dispatch] = useExampleStore();

  function incrementProperty1() {
    dispatch({
      type: ExampleStoreType.ADD_TO_FIRST,
      payload: 10
    });
  }

  return [state, incrementProperty1];
}
