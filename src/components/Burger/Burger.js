import React from 'react';

import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import BurgerStyles from './Burger.module.css';

const burger = props => {
  return (
    <div className={BurgerStyles.Burger}>
      <BurgerIngredients type="bread-top" />
      <BurgerIngredients type="cheese" />
      <BurgerIngredients type="meat" />
      <BurgerIngredients type="bread-bottom" />
    </div>
    
  )
}

export default burger;