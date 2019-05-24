import React, { Fragment } from 'react';

import Button from '../../UI/Button/Button';
import OrderSummaryStyles from './OrderSummary.module.css';

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
      <p>Your total is: <strong style={{ color: '#944317'}}>${props.orderTotal}</strong></p>
      <Button 
        className={OrderSummaryStyles.Order} 
        btnType="Danger" 
        clicked={props.purchaseCanceled}>CANCEL</Button>
        
      <Button 
        className={OrderSummaryStyles.Order} 
        btnType="Success" 
        clicked={props.purchaseContinued}>Continue to Checkout</Button>

    </Fragment>
  )
}

export default orderSummary;