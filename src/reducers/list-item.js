export default function listItemReducer(state, action) {
  if (action.type == 'create-list-item-success') {
    return {
      items: [...state.items, action.item],
    };
  } else {
    return state;
  }
}
