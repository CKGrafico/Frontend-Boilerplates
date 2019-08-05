import { ExampleStore } from '../../store';
import { useStore } from 'react-hookstore';

export function useExample() {
  const [state, dispatch] = useStore(ExampleStore.name);

  function incrementProperty1() {
    dispatch({
      type: ExampleStore.Type.ADD_TO_FIRST,
      payload: 10
    });
  }

  return [state, incrementProperty1];
}
