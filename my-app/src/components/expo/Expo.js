import React from 'react';
import { Expo2 } from '../expo2/Expo2';
import { Auxiliary } from '../hoc/Auxiliary';

export const Expo = props => {
  return (
    <Auxiliary>
      <Expo2 />
      <h2>This is Expo</h2>
      <h3>New React App</h3>
    </Auxiliary>
  );
};
