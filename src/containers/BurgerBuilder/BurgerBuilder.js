import React, { Component, Fragment } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


import INGREDIENT_PRICES from '../../constants/IngredientPrices';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 2,
    purchasable: false,
    purchasing: false,
  }

  addIngredientHandler = type => {
    const { ingredients, totalPrice } = this.state;

    const updatedCount = ingredients[type] + 1;
    const newPrice = totalPrice + INGREDIENT_PRICES[type];

    // STATE SHOULD REMAIN IMMUTABLE
    // ... will copy the contents of state into updatedIngredients object
    const updatedIngredients = {
      ...ingredients
    };

    updatedIngredients[type] = updatedCount;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = type => {
    const { ingredients, totalPrice } = this.state;

    if (ingredients[type] <= 0) {
      return;
    }

    const newPrice = totalPrice - INGREDIENT_PRICES[type];
    const updatedCount = ingredients[type] - 1;

    // !!!!! STATE SHOULD REMAIN IMMUTABLE !!!!!!
    // ... will copy the contents of state into updatedIngredients object
    const updatedIngredients = {
      ...ingredients
    };

    updatedIngredients[type] = updatedCount;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    this.updatePurchaseState(updatedIngredients);
  }

  updatePurchaseState = (ingredients) => {

    // ---------- WHY NOT THIS ??
    // console.log(Object.values(ingredients)) 
    // --> [0, 0, 0, 0]

    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    // console.log(sum);
    this.setState({ purchasable: sum > 0 })
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true })
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: !this.state.purchasing })
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    // disabled info will now be
    // { meat: true, salad: false, ...etc}

    return (
      <Fragment>
        <Modal 
          show={this.state.purchasing} 
          modalClosed={this.purchaseCancelHandler}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          purchasable={this.state.purchasable}
          price={this.state.totalPrice.toFixed(2)}
          ordered={this.purchaseHandler} />
      </Fragment>
    )
  }
}

export default BurgerBuilder;