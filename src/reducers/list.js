import listItemReducer from './list-item';
// Remember: State is an Array here.
export const listReducer = (state, action) => {
  console.log('lists', state)
  if(action.type == 'get-list-start') {
    return state
  } else if(action.type == 'get-list-success') {
    return action.lists
  } else if(action.type == 'create-list-success') {
    return [
      ...state,
      action.list,
    ].sort((a, b) => {
      if(a.updatedAt < b.updatedAt) {
        return 1
      } else if(a.updatedAt > b.updatedAt) {
        return -1
      } else {
        return 0
      }
    })
  } else if(action.type == 'update-list-item-success') {
    return state.map(list => {
      return listItemReducer(list)
    })
  } else {
    return state
  }
}