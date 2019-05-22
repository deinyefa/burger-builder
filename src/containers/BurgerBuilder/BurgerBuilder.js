import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      // bacon: 1,
      // cheese: 2,
      // meat: 2,
    }
  }

  render() {
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <p>Build Controls...</p>
      </Fragment>
    )
  }
}

export default BurgerBuilder;