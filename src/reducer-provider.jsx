import { useMemo, useReducer, createContext } from 'react';
import appReducer from './reducers/app-reducer';

const initialState = {
  name: 'Astrophe',
  lives: 9,
  status: 'alive',
}

export const Context = createContext({
  state: initialState,
  dispatch: _ => void undefined,
});

export default function Reduced(props) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const contextValue = useMemo(() => ({ state, dispatch }),  [state, dispatch]);
  return <Context.Provider value={contextValue}>
    {props.children}
  </Context.Provider>
}