import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  render() {
    return (
      <Fragment>
        <Burger />
        <p>Build Controls...</p>
      </Fragment>
    )
  }
}

export default BurgerBuilder;