import React, { Component, Fragment } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import INGREDIENT_PRICES from '../../constants/IngredientPrices';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 2,
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
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo} />
      </Fragment>
    )
  }
}

export default BurgerBuilder;