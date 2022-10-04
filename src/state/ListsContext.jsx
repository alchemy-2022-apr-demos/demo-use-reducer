import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Outlet } from 'react-router-dom';
import { createList, getLists } from '../services/lists.js';

const ListsContext = createContext();

export default function ListsProvider() {
  const [lists, setLists] = useState(null);

  const fetchLists = async () => {
    const { data, error } = await getLists();

    if (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
    if (data) {
      setLists(data);
    }
  };

  useEffect(() => {
    fetchLists();
  }, []);

  const value = {
    lists,
    setLists,
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
