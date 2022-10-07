import { catReducer } from './cat';
import { listReducer } from './list';

export default function appReducer(state, action) {
  const cat = catReducer(state.cat, action);
  const lists = listReducer(state.lists, action);
  return {
    ...state,
    cat,
    lists,
  };
}
