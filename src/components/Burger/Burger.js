import React from 'react';

import BurgerIngredient from './BurgerIngredients/BurgerIngredients';
import BurgerStyles from './Burger.module.css';

const burger = props => {
  const transformedIngredients =
    Object.keys(props.ingredients).map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => (
        <BurgerIngredient key={igKey + i} type={igKey} />
      ));
    });

  return (
    <div className={BurgerStyles.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>

  )
}

export default burger;