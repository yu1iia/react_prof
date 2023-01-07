import React, { useContext } from 'react';
import { HookContext } from '../../context/HookContext';

export const Expo2 = props => {
  const { state } = useContext(HookContext);
  console.log('Expo 2', state);
  return <h1>{state.expoTitle}</h1>;
};
