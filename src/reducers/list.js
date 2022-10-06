// Remember: State is an Array here.
export const listReducer = (state, action) => {
  if(action.type == 'get-list-start') {
    return state
  } else if(action.type == 'get-list-success') {
    return action.lists
  } else if(action.type == 'create-list-success') {
    return [
      ...state,
      action.list,
    ]
  } else {
    return state
  }
}