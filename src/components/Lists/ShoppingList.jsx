import React, { useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useList } from '../../state/ListsContext.jsx';
import ItemForm from './ItemForm.jsx';
import ListItem from './ListItem.jsx';
import styles from './ShoppingList.css';
import { Context as ReducerContext } from '../../reducer-provider.jsx';
import { getListsAction } from '../../actions/lists.js';
import { dispatchAddItemToList } from '../../actions/list-items.js';

export function ShoppingList() {
  const { state, dispatch } = useContext(ReducerContext);
  const { id } = useParams();
  useEffect(() => {
    getListsAction(dispatch);
  }, []);
  const list = state.lists.find(l => l.id == id);
  const { removeItem, buyItem } = useList(id);

  if (!list) return null;

  const handleAdd = (item) => {
    dispatchAddItemToList(dispatch, id, item);
  };

  const handleRemove = async ({ id, description, qty }) => {
    const message = `You are sure you want to remove ${qty} ${description}?`;
    if (confirm(message)) {
      await removeItem(id);
    }
  };

  const handleBuy = async ({ id }) => {
    await buyItem(id);
  };

  return (
    <section className={styles.ShoppingList}>
      <div>
        <Link to="..">Lists</Link> &gt; {list.name}
      </div>

      <ItemForm onAdd={handleAdd} />

      <ul>
        {list.items.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            onBuy={handleBuy}
            onRemove={handleRemove}
          />
        ))}
      </ul>
    </section>
  );
}
