import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddForm from '../Forms/AddForm.jsx';
import styles from './Lists.css';
import { Context as ReducerContext } from '../../reducer-provider.jsx';
import { addListAction, getListsAction } from '../../actions/lists.js';

export function Lists() {
  const { state, dispatch } = useContext(ReducerContext);

  useEffect(() => {
    getListsAction(dispatch);
  }, []);

  const handleAdd = (name) => {
    addListAction(dispatch, name);
  };

  return (
    <section className={styles.Lists}>
      <h2>Lists</h2>

      <AddForm onAdd={handleAdd} placeholder="add a new list..." />

      <ul>
        {state.lists.map((list) => {
          return (
            <li key={list.id}>
              <Link to={`${list.id}`}>{list.name}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
