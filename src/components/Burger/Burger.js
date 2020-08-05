import React from "react";
import BurgerStyles from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => (
        <BurgerIngredient key={igKey + i} type={igKey} />
      ));
    })
    .reduce((prevArr, currArr) => {
      return prevArr.concat(currArr);
    }, []);

  // console.log(transformedIngredients);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div style={{ flex: 1 }}>
      <div
        className={`${BurgerStyles.Burger} ${
          props.small ? BurgerStyles.SmallBurger : ""
        }`}
      >
        <BurgerIngredient type="bread-top" />
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom" />
      </div>
    </div>
  );
};

export default burger;
