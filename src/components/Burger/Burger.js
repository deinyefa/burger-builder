import React from 'react';

import BurgerIngredient from './BurgerIngredients/BurgerIngredients';
import BurgerStyles from './Burger.module.css';

const burger = props => {
  let transformedIngredients =
    Object.keys(props.ingredients).map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => (
        <BurgerIngredient key={igKey + i} type={igKey} />
      ));
    }).reduce((prevArr, currArr) => {
      return prevArr.concat(currArr)
    }, []);

  // console.log(transformedIngredients);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  } 

  return (
    <div className={BurgerStyles.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>

  )
}

export default burger;