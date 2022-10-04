import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Outlet } from 'react-router-dom';
import {
  createList,
  createListItem,
  deleteListItem,
  updateListItem,
  getLists,
} from '../services/lists.js';

const ListsContext = createContext();

export default function ListsProvider() {
  const [lists, setLists] = useState(null);
  const [listsById, setListsById] = useState({});

  const fetchLists = async () => {
    const { data, error } = await getLists();

    if (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
    if (data) {
      setLists(data);
      const map = data.reduce((map, list) => {
        map[list.id] = list;
        return map;
      }, {});
      setListsById(map);
    }
  };

  useEffect(() => {
    fetchLists();
  }, []);

  const addList = (list) => {
    setLists((lists) => [...lists, list]);
    setListsById((listsById) => ({
      ...listsById,
      [list.id]: list,
    }));
  };

  const updateList = (updated) => {
    setLists((lists) =>
      lists.map((list) => (list.id === updated.id ? updated : list))
    );
    setListsById((listsById) => ({
      ...listsById,
      [updated.id]: updated,
    }));
  };

  const value = {
    lists,
    setLists,
    listsById,
    addList,
    updateList,
  };

  return (
    <ListsContext.Provider value={value}>
      <Outlet />
    </ListsContext.Provider>
  );
}

export function useLists() {
  const [error, setError] = useState(null);
  const { lists, setLists } = useContext(ListsContext);

  const addList = async (list) => {
    const { data, error } = await createList(list);
    if (error) {
      setError(error.message);
    } else {
      setLists((lists) => [...lists, data]);
      setError(null);
    }
  };

  return { lists, error, addList };
}

export function useList(id) {
  const { listsById, updateList } = useContext(ListsContext);
  const [error, setError] = useState(null);
  const list = listsById[id];

  const addItem = async (item) => {
    const { data, error } = await createListItem(id, item);

    if (error) {
      setError(error.message);
    } else {
      const updatedList = { ...list, items: [...list.items, data] };
      updateList(updatedList);
      setError(null);
    }
  };

  const buyItem = async (itemId) => {
    const { data, error } = await updateListItem(id, itemId, {
      bought: true,
    });

    if (error) {
      setError(error.message);
    } else {
      const updatedList = {
        ...list,
        items: list.items.map((item) =>
          item.id === itemId ? data : item
        ),
      };
      updateList(updatedList);
      setError(null);
    }
  };

  const removeItem = async (itemId) => {
    const { error } = await deleteListItem(id, itemId);

    if (error) {
      setError(error.message);
    } else {
      const updatedList = {
        ...list,
        items: list.items.filter((item) => item.id !== itemId),
      };
      updateList(updatedList);
      setError(null);
    }
  };

  return {
    list,
    addItem,
    buyItem,
    removeItem,
    error,
  };
}
