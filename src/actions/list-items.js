import { createListItem } from '../services/lists';

export const dispatchAddItemToList = async (dispatch, listId, item) => {
  dispatch({ type: 'create-list-item-start' });
  const { data, error } = await createListItem(listId, item);


  if (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    dispatch({ type: 'create-list-item-error' });
  }
  if (data) {
    dispatch({ type: 'create-list-item-success', item: data });
  }
};
