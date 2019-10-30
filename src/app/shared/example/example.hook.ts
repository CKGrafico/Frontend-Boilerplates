import { useExampleStore, ExampleStoreType } from '~/store';

export function useExample() {
  // You can use stores directly form components, this is only an example of hook
  const [state, dispatch] = useExampleStore();

  function incrementProperty1() {
    dispatch({
      type: ExampleStoreType.ADD_TO_FIRST,
      payload: 10
    });
  }

  return [state, incrementProperty1] as const;
}
