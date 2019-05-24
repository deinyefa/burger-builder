import React, { Fragment } from 'react';

import OrderSummaryStyles from './OrderSummary.module.css'

const orderSummary = props => {

  const ingredientsSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
        </li>
      )
    })

  return (
    <Fragment>
      <h2>Your Order Summary</h2>
      <p>Your burger contains the following ingredients: </p>
      <ul>
        {ingredientsSummary}
      </ul>
      <p><button className={OrderSummaryStyles.Order}>Continue to Checkout</button></p>

    </Fragment>
  )
}

export default orderSummary;