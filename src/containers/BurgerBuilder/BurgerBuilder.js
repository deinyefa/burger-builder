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

    const updatedCount = this.state.ingredients[type] + 1;
    const newPrice = totalPrice + INGREDIENT_PRICES[type];

    // STATE SHOULD REMAIN IMMUTABLE
    // ... will copy the contents of state into updatedIngredients object
    const updatedIngredients = {
      ...ingredients
    };

    updatedIngredients[type] = updatedCount;
    console.log(totalPrice);
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  }

  render() {
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          ingredientAdded={this.addIngredientHandler} />
      </Fragment>
    )
  }
}

export default BurgerBuilder;