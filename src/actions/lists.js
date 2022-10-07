import { createList, getLists } from '../services/lists';

export const getListsAction = async (dispatch) => {
  dispatch({ type: 'get-list-start' });
  const { data, error } = await getLists();

  if (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    dispatch({ type: 'get-list-error' });
  }
  if (data) {
    dispatch({ type: 'get-list-success', lists: data });
  }
};

export const addListAction = async (dispatch, name) => {
  dispatch({ type: 'create-list-start' });
  const { data, error } = await createList({ name });

  if (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    dispatch({ type: 'create-list-error' });
  }
  if (data) {
    dispatch({ type: 'create-list-success', list: { id: data.id, name } });
  }
};
