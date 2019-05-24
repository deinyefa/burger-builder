import React from 'react';

import BuildControlsStyles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' },
]

const buildControls = props => (
  <div className={BuildControlsStyles.BuildControls}>
    <p>Price: <strong>${props.price}</strong></p>
    { controls.map( ctrl => (
      <BuildControl 
        key={ctrl.label} 
        label={ctrl.label} 
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]} />
    ))}
    <button onClick={props.ordered} className={BuildControlsStyles.Checkout} disabled={!props.purchasable}>Checkout</button>
  </div>
);

export default buildControls;