import React from 'react';

import BuildControlStyles from './BuildControl.module.css'

const buildControl = props => (
  <div className={BuildControlStyles.BuildControl}>
    <div className={BuildControlStyles.Label}>{props.label}</div>
    <button className={BuildControlStyles.Less}>Less</button>
    <button className={BuildControlStyles.More}>More</button>
  </div>
);

export default buildControl;