import React, { Fragment, useState } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";
import Spinner from "../../components/UI/Spinner/Spinner";
import INGREDIENT_PRICES from "../../constants/IngredientPrices";
import { withFirebase } from "../../firebase";

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState({
    bacon: 0,
    cheese: 0,
    meat: 0,
    salad: 0,
  });
  const [price, setPrice] = useState(2);
  const [purchasable, setPurchasable] = useState(false);
  const [purchasing, setPurchasing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const addIngredientHandler = (type) => {
    const updatedCount = ingredients[type] + 1;
    const newPrice = price + INGREDIENT_PRICES[type];

    // STATE SHOULD REMAIN IMMUTABLE
    // ... will copy the contents of state into updatedIngredients object
    const updatedIngredients = {
      ...ingredients,
    };

    updatedIngredients[type] = updatedCount;
    setIngredients(updatedIngredients);
    setPrice(newPrice);

    updatePurchaseState(updatedIngredients);
  };

  const removeIngredientHandler = (type) => {
    if (ingredients[type] <= 0) {
      return;
    }

    const newPrice = price - INGREDIENT_PRICES[type];
    const updatedCount = ingredients[type] - 1;

    // !!!!! STATE SHOULD REMAIN IMMUTABLE !!!!!!
    // ... will copy the contents of state into updatedIngredients object
    const updatedIngredients = {
      ...ingredients,
    };

    updatedIngredients[type] = updatedCount;
    setIngredients(updatedIngredients);
    setPrice(newPrice);

    updatePurchaseState(updatedIngredients);
  };

  const updatePurchaseState = (ingredients) => {
    // ---------- WHY NOT THIS ??
    // console.log(Object.values(ingredients))
    // --> [0, 0, 0, 0]

    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    // console.log(sum);
    setPurchasable(sum > 0);
  };

  const purchaseHandler = () => setPurchasing(true);

  const purchaseCancelHandler = () => setPurchasing((p) => !p);

  const purchaseContinueHandler = () => {
    const queryParams = [];
    for (let i in ingredients) {
      queryParams.push(
        encodeURIComponent(i) + "=" + encodeURIComponent(ingredients[i])
      );
    }
    queryParams.push("price=" + price);
    const queryString = queryParams.join("&");
    // props.history.push({
    //   pathname: "/checkout",
    //   search: "?" + queryString,
    // });
  };

  const disabledInfo = {
    ...ingredients,
  };

  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  // disabled info will now be
  // { meat: true, salad: false, ...etc}

  let orderSummary = (
    <OrderSummary
      ingredients={ingredients}
      purchaseCanceled={purchaseCancelHandler}
      purchaseContinued={purchaseContinueHandler}
      orderTotal={price.toFixed(2)}
    />
  );

  if (loading || !ingredients) {
    orderSummary = <Spinner />;
  }

  let burger = error ? (
    <p style={{ textAlign: "center" }}>
      Oh no! Something went very wrong. Please come back another time.
    </p>
  ) : (
    <Spinner />
  );

  if (ingredients) {
    burger = (
      <Fragment>
        <Burger ingredients={ingredients} />
        <BuildControls
          ingredientAdded={addIngredientHandler}
          ingredientRemoved={removeIngredientHandler}
          disabled={disabledInfo}
          purchasable={purchasable}
          price={price.toFixed(2)}
          ordered={purchaseHandler}
        />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        {orderSummary}
      </Modal>
      {burger}
    </Fragment>
  );
};

export default withFirebase(BurgerBuilder);
