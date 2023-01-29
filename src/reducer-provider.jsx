import { useMemo, useReducer, createContext } from 'react';
import appReducer from './reducers/app-reducer.js';

const initialState = {
  cat: {
    name: 'Astrophe',
    pets: 0,
    status: 'sad',
  },
  lists: [],
};

export const Context = createContext({
  state: initialState,
  dispatch: (_) => void undefined,
});

export default function Reduced(props) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const contextValue = useMemo(
    () => ({ state, dispatch }),
    [state, dispatch]
  );
  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
}
