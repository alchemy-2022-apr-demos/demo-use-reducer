import React, { useContext } from 'react'
import { addCatLifeAction, removeCatLifeAction } from '../actions/cat.js';
import { Context as ReducerContext } from '../reducer-provider.jsx'

export default function Catponent() {
  const { state, dispatch } = useContext(ReducerContext);
  const removeOneLife = (e) => {
    dispatch(removeCatLifeAction(1));
  }
  const removeFiveLives = (e) => {
    dispatch(removeCatLifeAction(5));
  }
  const addOneLife = (e) => {
    dispatch(addCatLifeAction(1));
  }
  
  return <article>
    <dl>
      <dt>Name</dt>
      <dd>{state.name}</dd>
      <dt>Lives</dt>
      <dd>{state.lives}</dd>
      <dt>Catus</dt>
      <dd>{state.status}</dd>
    </dl>
    <fieldset>
      <button onClick={removeOneLife}>-1 life</button>
      <button onClick={removeFiveLives}>-5 lives</button>
      <button onClick={addOneLife}>+1 life</button>
    </fieldset>
  </article>
}