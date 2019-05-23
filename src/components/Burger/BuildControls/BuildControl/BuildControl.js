import React from 'react';

import BuildControlStyles from './BuildControl.module.css'

const buildControl = props => (
  <div className={BuildControlStyles.BuildControl}>
    <div className={BuildControlStyles.Label}>{props.label}</div>
    <button className={BuildControlStyles.Less}>-</button>
    <button className={BuildControlStyles.More} onClick={props.added}>+</button>
  </div>
);

export default buildControl;