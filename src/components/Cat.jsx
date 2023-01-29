import React, { useContext } from 'react';
import { petCatAction, ignoreCatAction } from '../actions/cat.js';
import { Context as ReducerContext } from '../reducer-provider.jsx';

export default function Catponent() {
  const { state, dispatch } = useContext(ReducerContext);
  const ignoreCat = (_e) => {
    dispatch(ignoreCatAction(1));
  };
  const petVigorously = (_e) => {
    dispatch(petCatAction(5));
  };
  const petNormally = (_e) => {
    dispatch(petCatAction(1));
  };

  return (
    <article>
      <dl>
        <dt>Name</dt>
        <dd>{state.name}</dd>
        <dt>Pets</dt>
        <dd>{state.pets}</dd>
        <dt>Catus</dt>
        <dd>{state.status}</dd>
      </dl>
      <fieldset>
        <button onClick={ignoreCat}>Ignore cat</button>
        <button onClick={petVigorously}>Pet cat normaly</button>
        <button onClick={petNormally}>Pet cat vigorously</button>
      </fieldset>
    </article>
  );
}
